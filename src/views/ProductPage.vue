<template>
  <div class="container">
    <h1>ID: {{ $route.params.id }}</h1>
    <div class="card">
      <div class="card-body">
        <ul style="list-style: none;">
          <li class="card-text">
            <strong>Product Identifier:</strong>
            {{ product.ProductIdentifier }}
          </li>
          <li class="card-text">
            <strong>Product Code:</strong>
            {{ product.ProductCode }}
          </li>
          <li class="card-text">
            <strong>Product Name:</strong>
            {{ product.ProductName }}
          </li>
          <li class="card-text">
            <strong>Product Manufacturer:</strong>
            {{ product.ProductManufacturer }}
          </li>
          <li class="card-text">
            <strong>Product Model:</strong>
            {{ product.ProductModel }}
          </li>
          <li class="card-text">
            <strong>Product Type:</strong>
            {{ product.ProductType }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {
        ProductIdentifier: "65bf645e-f808-4c0b-bd87-0a30fa074b03",
        ProductCode: "Product 11",
        ProductName: "Product 11",
        ProductManufacturer: "Product 11",
        ProductModel: "Product 11",
        ProductType: "INVERTER",
        entity: "e11bd349-4f0c-48ed-a3ab-3cf5d4a6a15a",
        certificates: ["4a577bef-ba83-4ec6-b02a-ad06f4ef2cb5"]
      }
    };
  }
};
</script>


<style scoped>
</style>