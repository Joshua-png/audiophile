import { createClient } from "contentful";
import { useEffect, useState } from "react";

const cleanUrl = (url) => {
  if (!url) return "";
  return url.replace(/^\/\//, "https://");
};

// Transformation function
const transformProductData = (items) => {
  return items.map((item) => {
    const fields = item.fields;

    const transformImageSet = (imageSet) => ({
      mobile: cleanUrl(imageSet?.fields?.mobile?.fields?.file?.url),
      tablet: cleanUrl(imageSet?.fields?.tablet?.fields?.file?.url),
      desktop: cleanUrl(imageSet?.fields?.desktop?.fields?.file?.url),
    });

    const includes =
      fields.includes?.map((include) => ({
        quantity: include.fields.quantity,
        item: include.fields.item,
      })) || [];

    const gallery = fields.gallery?.[0]?.fields || {};
    const transformedGallery = {
      first: transformImageSet(gallery.first),
      second: transformImageSet(gallery.second),
      third: transformImageSet(gallery.third),
    };

    const others =
      fields.others?.map((other) => ({
        slug: other.fields.slug,
        name: other.fields.name,
        image: transformImageSet(other.fields.image),
      })) || [];

    return {
      id: fields.id,
      slug: fields.slug,
      name: fields.name,
      image: transformImageSet(fields.image),
      category: fields.category,
      categoryImage: transformImageSet(fields.categoryImage),
      new: fields.new,
      price: fields.price,
      description: fields.description,
      features: fields.features,
      includes: includes,
      gallery: transformedGallery,
      others: others,
    };
  });
};

export const useContentful = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const client = createClient({
    space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
    accessToken: import.meta.env.VITE_CONTENTFUL_DELIVERY_API,
    host: `cdn.contentful.com`,
  });

  const getProducts = async () => {
    try {
      const response = await client.getEntries({
        content_type: "product",
        select: "fields",
        include: 3,
      });

      const transformedProducts = transformProductData(response.items);
      setProducts(transformedProducts);

      console.log(JSON.stringify(transformedProducts));

      return entries;
    } catch (error) {
      console.log(`Error fetching products: ${error}`);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return { products, loading, error };
};
