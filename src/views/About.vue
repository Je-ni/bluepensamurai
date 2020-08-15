<template>
  <div class="grid md:grid-cols-2 gap-3 px-6 py-6 md:px-16">
    <div>
      <h1 class="font-normal border-b-2 text-2xl">chiemelie olibie</h1>
      <p class="py-2 text-justify">
        i am a warrior that wanders the land and encounters moments. every
        moment has lines and feelings in them which i have to illustrate. these
        are battles; some are strong, some are weak, some are kind, some are
        dirty, some are elusive, and some dance. but i have to defeat them so
        they can be my friends. all those lines that bend a lot, all those
        impulses, expressions, urges, conversations, flashes that go away when
        you blink, all those incomplete pictures that come together to make one
        story, that’s me, that’s my work, and these are my people.
      </p>
    </div>
    <img
      class="max-w-lg sm:row-start-1"
      :src="profile"
      alt="Chiemelie Olibie"
    />
  </div>
</template>

<script>
import profile from "@/assets/img/profile.jpg";

export default {
  name: "About",
  data() {
    return {
      profile: profile
    };
  }
};
</script>
