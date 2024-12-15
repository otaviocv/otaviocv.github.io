<svelte:head>
    <title>otaviocv</title> 
</svelte:head>

<div class="app">

  <div class="content">
      <br>

    <h1>otaviocv.</h1>

    <div class="topsection">
      <p class="left">
        <br>
        Hi!
        <br>
        <br>
        My name is
        <br>
        <span class="bold">Otávio</span>
      </p>
      <p class="right">
        ───────── <br>
        <a class="bold blue" href="https://x.com/otaviocv">twitter</a><br>
        <a class="bold pink" href="https://www.youtube.com/@otaviocv">youtube</a><br>
        <a class="bold purple" href="https://www.linkedin.com/in/otaviocv/">linkedin</a><br>
        ─────────
      </p>

    </div>

    <br>

    <p>
      (with otaviocv being my digital alias since I started using the internet)
    </p>

    <br>

    <p>
      And I love to make things with computers, inside and outside them!
    </p>

    <br>

    <p>
      I am a physicist by education and a machine learning engineer by profession.
      If you are interested in my professional background you can check my linkedin page.
    </p>

    <br>

    <p>
      A lot of things fascinate and obsess me.
      I will try to write about these things and if they end
      up taking a lot of time from me they can end up in a youtube video.
    </p>

    <br>

    <p>
      See ya! 👋 
    </p>
    <br>

  </div>
</div>


<style>

@import url('https://fonts.googleapis.com/css2?family=Xanh+Mono:ital@1&display=swap');

@font-face {
	font-family: 'Iosevka Term Web';
	font-display: swap;
	font-weight: 400;
	font-stretch: normal;
	font-style: normal;
	src: url('$fonts/WOFF2/IosevkaTerm-Regular.woff2') format('woff2'), url('$fonts/TTF/IosevkaTerm-Regular.ttf') format('truetype');
}

@font-face {
	font-family: 'Iosevka Term Web';
	font-display: swap;
	font-weight: 700;
	font-stretch: normal;
	font-style: normal;
	src: url('$fonts/WOFF2/IosevkaTerm-Bold.woff2') format('woff2'), url('$fonts/TTF/IosevkaTerm-Bold.ttf') format('truetype');
}

a:link, a:visited, a:hover, a:active {
  text-decoration: none;
}

.app {
  font-family: Iosevka Term Web, Consolas, Courier, monospace;
  font-size: 24px;
  width: 100%;
  min-height: 100vh;
  display: content;
  background: var(--theme-backgroung-color);
  color: var(--theme-text-color);
}

h1 {
  font-family: "Xanh Mono", monospace;
  font-weight: 400;
  font-style: italic;
}

.content {
  max-width: 750px;
  padding: 24px;
  margin: auto;
}

.topsection {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.right {
  margin-left:auto;
}

.bold {
  font-family: Iosevka Term Web, Consolas, Courier, monospace;
	font-weight: 700;
}

.blue {
  color: var(--theme-blue);
}

.pink {
  color: var(--theme-pink);
}

.purple {
  color: var(--theme-purple);
}


</style>
