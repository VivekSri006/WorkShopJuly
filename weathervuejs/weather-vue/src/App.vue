<template>
  <h2
    style="color:black;justify-content: center; display: flex; margin-bottom: -33px;"
  >
    Weather App
  </h2>
  <div class="card col-4 mx-auto my-5 bg-image " v-if="visible">
    <div class="card-body">
      <h5 class="card-title text-white">{{ city }}</h5>
      <h1 class="text-white">{{ temp }}&#176;C</h1>
    </div>
  </div>
  <div v-else>
    Loading......
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      count: 4,
      city: "Not",
      temp: 0,
      visible: false,
    };
  },
  created() {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=basti&appid=07e7dc0f61902aace3cea84d8cf25cce&units=metric"
    )
      .then((response) => response.json())
      .then(
        (data) => (
          (this.city = data.name),
          (this.temp = data.main.temp),
          (this.visible = true)
        )
      );
  },
};
</script>

<style>
.bg-image {
  background-image: url("https://www.google.com/url?sa=i&url=https%3A%2F%2Fnordicapis.com%2F6-best-free-and-paid-weather-apis%2F&psig=AOvVaw0fffdb2VjKBpEsYQ3AykYR&ust=1628870920133000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKjGnp7vq_ICFQAAAAAdAAAAABAE");
  background-size: cover;
  background-position: center;
  height: 85vh;
  width: 99%;
}
h1 {
  position: absolute;
  bottom: 0;
  right: 15px;
}
h5 {
  font-size: 30px;
}
h6 {
  color: black;
}
</style>
