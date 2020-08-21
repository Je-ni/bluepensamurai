<template>
  <div class="grid md:grid-cols-2 gap-5 px-6 py-3">
    <img class="max-w-lg w-full" :src="profile" alt="Chiemelie Olibie" />
    <div class="md:row-start-1">
      <h1 class="font-normal border-b border-red-200 text-2xl">
        chiemelie olibie
      </h1>
      <p class="py-2 text-justify">
        i am a warrior that wanders the land and encounters moments. every
        moment has lines and feelings in them which i have to illustrate. these
        are battles; some are strong, some are weak, some are kind, some are
        dirty, some are elusive, and some dance. but i have to defeat them so
        they can be my friends. all those lines that bend a lot, all those
        impulses, expressions, urges, conversations, flashes that go away when
        you blink, all those incomplete pictures that come together to make one
        story, that’s me, that’s my work, and these are my people.
        <br />
        <br />
        <a href="mailto:email: geraldoc@gmail.com"
          >Mail me:
          <span class="hover:text-red-400"> geraldoc@gmail.com </span></a
        >
      </p>
    </div>
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
