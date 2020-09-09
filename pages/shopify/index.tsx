import React from "react";
import Link from "next/link";
import AnnotatedLayout from "./anotated-layout";
import CurrencySetting from "./currency-setting";

function ShopifyDashboard() {
  return (
    <ul>
      <li>
        <Link href="/anotated-layout">
          <AnnotatedLayout></AnnotatedLayout>
        </Link>
      </li>
      <li>
        <Link href="/currency-setting">
          <CurrencySetting></CurrencySetting>
        </Link>
      </li>
    </ul>
  );
}

export default ShopifyDashboard;
