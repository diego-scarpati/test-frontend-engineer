export default function Home() {
  return (
    <main className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-20 py-6">
      <section className="p-6 rounded-lg border border-foreground shadow-card">
        <h1 className="text-2xl font-bold text-gray-500 text-center mb-4">
          About the Fake Store API
        </h1>
        <p className="text-gray-400 leading-relaxed text-justify">
          The <strong>Fake Store API</strong> is a free RESTful API that
          provides dummy data for e-commerce platforms. It allows developers to
          experiment with features like product listing, detail views, and
          shopping carts without needing a custom backend. The API includes
          sample products with information such as:
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-400">
          <li>
            <strong>Product Name:</strong> Title of the product.
          </li>
          <li>
            <strong>Price:</strong> Cost of the product in USD.
          </li>
          <li>
            <strong>Description:</strong> Brief details about the product.
          </li>
          <li>
            <strong>Category:</strong> Product category (e.g., electronics,
            clothing).
          </li>
          <li>
            <strong>Image:</strong> URL for the product image.
          </li>
        </ul>
      </section>

      <section className="p-6 rounded-lg mt-6 border border-foreground shadow-card">
        <h2 className="text-xl font-semibold text-gray-500 mb-4">
          Purpose of This Test
        </h2>
        <p className="text-gray-400 leading-relaxed text-justify">
          This test assesses your ability to build a responsive e-commerce
          application using modern web technologies. You will leverage the{" "}
          <strong>Fake Store API</strong> to display products and implement core
          features such as:
        </p>
        <ul className="list-decimal list-inside mt-4 space-y-2 text-gray-400">
          <li>
            Fetching and displaying product data with pagination or infinite
            scrolling.
          </li>
          <li>
            Creating a product detail page with an Add to Cart functionality.
          </li>
          <li>
            Building a shopping cart system with quantity and price management.
          </li>
          <li>
            Ensuring responsiveness for mobile, tablet, and desktop views.
          </li>
        </ul>
        <p className="mt-4 text-gray-300">
          Your application should be clean, maintainable, and user-friendly,
          with a focus on best practices like reusable components and state
          management.
        </p>
      </section>
    </main>
  );
}
