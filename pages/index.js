import { getSortedPostsData } from "../lib/posts";
import { EmptyState, Page, TextStyle, Layout } from "@shopify/polaris";
const img = "https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg";
const Index = () => (
  <Page>
    <Layout>
      <EmptyState
        heading="Discount your products temporarily"
        action={{
          content: "Select products",
          onAction: () => console.log("clicked"),
        }}
        image={img}
      >
        <p>Select products to change their price temporarily.</p>
      </EmptyState>
    </Layout>
  </Page>
);

export default Index;

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
