<template>
  <div class="containerMain">
    <div class="about">
      <h1>Welcome to SQL Master!</h1>
      <p class="introduction">
        Embark on Your SQL Mastery Adventure with SQL Master!
      </p>

      <p>
        Dive into the thrilling world of SQL with <strong>SQL Master</strong>,
        your ultimate interactive companion crafted to elevate your SQL prowess
        using the intriguing data from the 2013 StackOverflow database. Unleash
        your potential and embark on a quest filled with challenges tailored to
        every skill level.
      </p>

      <h2 class="headferH2">Why SQL Master? Uncover the Features:</h2>
      <div class="li">
        <ul class="features-list">
          <li>
            <strong>Choose Your Adventure:</strong> From the curious beginner to
            the seasoned pro, select challenges that resonate with your current
            skill level or dare to leap beyond.
          </li>
          <li>
            <strong>Real-World Quests:</strong> Engage with tasks carved out of
            real data from the 2013 StackOverflow treasure trove.
          </li>
          <li>
            <strong>Track Your Triumphs:</strong> Watch your progress flourish
            in real-time.
          </li>
          <li>
            <strong>Seamless Exploration:</strong> Glide through tasks and
            levels with ease.
          </li>
          <li id="wisdom">
            <strong>Wisdom at Your Fingertips:</strong> Each task is a lesson
            waiting to unfold, accompanied by concise guides on rules and
            techniques.
          </li>
          <li>
            <strong>Access the Oracle:</strong> Whenever you seek deeper
            knowledge, the portal to official Microsoft Learn documentation
            stands ready.
          </li>
        </ul>
      </div>
      <p class="conclusion">
        Are you ready to begin your odyssey to SQL mastery? The path to becoming
        a SQL hero starts today!
      </p>
    </div>
  </div>
</template>

<script>
// import backgroundImage from "../data/images/1.webp"

export default {
  name: "NavMain",
};
</script>

<style scoped>
.containerMain{
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
max-width: 1200px;
/* background-color: #1f6b7e; */
background-image: url('../data/images/2.webp');
background-size: cover; /* Cover the entire screen without stretching the image */
  background-position: center;
}

.about {
  background: linear-gradient(to right top, #009ffd, #2a2a72);
  color: #fff;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  max-width: 900px;
  width: 100%; /* Make sure it respects the container's width */
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  box-sizing: border-box; /* Ensures padding doesn't expand the block beyond max-width */
}


h1,
.introduction,
.conclusion,
.headferH2 {
  text-align: center;
}

strong {
  color: #a9c9fc;
  text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2);
}

.introduction,
.conclusion {
  font-style: italic;
  margin-bottom: 20px;
}

.features ul {
  list-style: none;
  padding: 0;
}

#features-list {
  display: flex;

  margin-bottom: 15px;
  justify-content: left;
}

.li {
  display: flex;
  justify-content: flex-start;
}

.features li i {
  margin-right: 10px;
  font-size: 1.5em;
}

#app {
  text-align: left;
}
</style>
