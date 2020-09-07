import {
  Button,
  Card,
  Form,
  FormLayout,
  Layout,
  Page,
  Stack,
  TextField,
} from "@shopify/polaris";
import { useState } from "react";

function AnnotatedLayout() {
  const [discount, setDiscount] = useState("10%");
  const handleSubmit = () => {
    alert("set discount" + discount);
  };

  const textDidChange = (text: string) => {
    setDiscount(text);
  };

  return (
    <Page>
      <Layout>
        <Layout.AnnotatedSection
          title="Default discount"
          description="Add a product to Sample App, it will automatically be discounted."
        >
          <Card sectioned>
            <Form onSubmit={handleSubmit}>
              <FormLayout>
                <TextField
                  value={discount}
                  onChange={textDidChange}
                  label="Discount percentage"
                  type="text"
                />
                <Stack distribution="trailing">
                  <Button primary submit>
                    Save
                  </Button>
                </Stack>
              </FormLayout>
            </Form>
          </Card>
        </Layout.AnnotatedSection>
      </Layout>
    </Page>
  );
}

export default AnnotatedLayout;
