<script>
  import { Router, Link, Route } from 'svelte-routing';
  import TabBar from './components/TabBar.svelte';

  export let url = '';
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900&display=swap');

  footer {
    left: 0;
    bottom: 0;
    color: white;
    text-align: center;
    justify-content: center;
    display: flex;
    padding: 5px;
    background-color: #3B4252;
    box-shadow: rgba(36, 41, 51, 0.15) 0px 5px 10px 5px;
  }

  main {
    padding-top: 10px;
    padding-bottom: 50px;
    margin-top: 60px;
    color: white;
    padding-left: 10%;
    padding-right: 10%;
  }

  .github-link {
    text-decoration: inherit;
    color: inherit;
  }

  .app-header {
    z-index: 10;
    overflow: hidden;
    top: 0;
    background-color: #2E3440;
    display: flex;
    justify-content: space-between;
    height: 50px;
    box-shadow: rgba(36, 41, 51, 0.15) 0px 5px 10px 0px;
    position: fixed;
    width: 100%;
  }

  .app-title-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    font-weight: 700;
    font-size: 20px;
    margin-left: 15px;
  }

  .app-tab-container {
    display: flex;
    margin-right: 15px;
  }
</style>

<Router url={url}>
  <header class="app-header">
    <div class="app-title-container">
      <span>File Indexer</span>
    </div>
    <div class="app-tab-container">
      <TabBar route="/">
        Inicio
      </TabBar>
      <TabBar route="/index">
        Indexear
      </TabBar>
    </div>
  </header>
  <main>
    <Route path="/">
      <h1>Inicio</h1>
    </Route>
    <Route path="/index">
      <h1>Indexear</h1>
      <br />
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris volutpat, nisl id posuere posuere, arcu leo gravida quam, non lacinia metus nibh at odio. Quisque massa arcu, aliquam consequat pretium eget, sollicitudin sed sem. Nam malesuada tincidunt ullamcorper. Quisque et libero justo. Aenean venenatis scelerisque laoreet. Nulla in lacinia neque, quis pellentesque felis. Morbi at suscipit metus. Aliquam elementum enim quis tempus condimentum. Vestibulum finibus eu turpis a ultricies. Nulla viverra elit a ex mollis porttitor. Praesent at finibus neque. Etiam id fermentum lectus. Donec id magna sed nunc tristique convallis quis et massa. Sed mollis nibh dui, vitae luctus magna mattis id. Aenean a condimentum arcu.

Mauris vulputate diam vitae enim porttitor, at convallis sapien tempus. Nam id iaculis nisl. Aenean condimentum erat eget augue porta vehicula. Ut vel purus quam. Duis elementum arcu pellentesque neque volutpat, sed dignissim enim consequat. Nunc vulputate dui lectus, maximus faucibus velit hendrerit in. Duis bibendum pellentesque nisl, in rhoncus lorem fermentum pretium. Aliquam quis elementum risus, vitae vulputate tortor. Praesent a mi at ipsum volutpat faucibus. Nam finibus lacinia lorem sed gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Nam eget tortor non massa accumsan porttitor. Nunc sit amet felis metus. Donec condimentum lobortis lorem at commodo. Integer facilisis ante non mollis faucibus. Nam massa risus, convallis vitae rutrum non, hendrerit sit amet ante. Proin a augue neque. Curabitur interdum condimentum augue, sit amet posuere nunc iaculis quis. Etiam quis lorem sem. In eu nisl quis mauris ornare tincidunt. Mauris tellus ligula, consequat quis nisi sit amet, congue elementum massa.

Maecenas nec mi euismod, porttitor nisi nec, dictum eros. Nullam lobortis in metus eget semper. Cras laoreet, mi a egestas blandit, neque felis tristique metus, sit amet lobortis urna ex sit amet augue. Praesent vehicula nibh sit amet enim auctor, ut euismod mauris viverra. Nulla sed enim malesuada, imperdiet ipsum in, condimentum felis. Cras semper sem vitae velit mattis vestibulum. Donec iaculis dictum sapien eu tempor. Pellentesque leo metus, bibendum et mauris id, venenatis mattis sem. Donec bibendum vel sapien a placerat. Sed pulvinar neque purus, non bibendum velit condimentum sit amet. Donec porttitor dolor feugiat enim dapibus pretium. Nullam gravida ligula id egestas sagittis. Curabitur dolor orci, tempor eget commodo id, hendrerit ac augue. Vivamus ac sapien lectus. Nullam vestibulum vehicula odio, nec bibendum sem efficitur quis. Duis in nunc euismod, hendrerit ipsum vehicula, interdum sapien.

Nam et sapien eu ipsum varius porttitor. Fusce tempor ante sit amet molestie laoreet. Aenean nec nunc nulla. Proin tempor nec orci vel sollicitudin. Maecenas vel erat a lacus volutpat sagittis ut non libero. Vestibulum sapien sapien, molestie et malesuada vitae, volutpat at nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut hendrerit convallis sem quis semper. Fusce eget diam varius, finibus velit vel, aliquam mi. Pellentesque fermentum tellus non metus tristique, et mattis elit pulvinar. Sed elementum arcu ante, a pellentesque lorem semper consequat. Sed rhoncus diam ut orci tincidunt, at auctor lacus dignissim. Cras non urna risus.

In hac habitasse platea dictumst. Donec eu libero in augue rutrum faucibus in ac erat. Aenean neque risus, tempor ut euismod euismod, commodo quis augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec et ex vehicula, dignissim velit in, mattis est. Sed vitae molestie turpis. Donec porta nisl sit amet metus posuere, quis varius ligula scelerisque. Etiam sit amet mauris id lectus tempus suscipit.

Sed scelerisque sapien vitae dui euismod, eget rhoncus odio posuere. Nam justo ipsum, eleifend posuere suscipit sit amet, vestibulum scelerisque nunc. Phasellus id lectus ut mauris efficitur consequat. Aenean in ligula tempus, malesuada tellus non, semper arcu. Fusce quis tincidunt mauris. Sed ultrices orci vel magna dictum, nec fermentum urna facilisis. Vivamus accumsan ipsum vel porttitor mattis.

Sed vitae ex tincidunt, sagittis turpis quis, imperdiet enim. Suspendisse blandit neque at sapien posuere, sed blandit metus commodo. Sed vitae enim sit amet elit pharetra tincidunt. Suspendisse dictum turpis ut pulvinar mattis. Phasellus laoreet augue sed nibh venenatis, eu luctus justo ultrices. Nullam nec ante viverra, ultricies elit eleifend, molestie quam. Ut porttitor tempus quam at condimentum. Donec eleifend ac urna in mattis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Mauris bibendum ullamcorper est, a venenatis ligula efficitur eu. Fusce ullamcorper rutrum laoreet. Vestibulum a varius dolor. Fusce dictum leo id odio commodo tristique. Phasellus fringilla massa a magna tempor facilisis. Ut et consequat orci. Aliquam id nisi ut lacus mattis tincidunt. Ut ac mi metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer nec enim metus. Mauris molestie consectetur ante, eu hendrerit quam vehicula at. Vivamus ut cursus odio.

Morbi ligula odio, cursus at quam et, fringilla tristique lorem. Vivamus posuere suscipit nisl at porttitor. Nam at rutrum lacus, id fermentum tortor. Phasellus enim dui, ultrices ac sem at, pellentesque feugiat felis. Donec sed rutrum dui. Nullam non neque id eros tincidunt mollis. Phasellus egestas felis ut eros hendrerit tempus. In elementum nisi ut orci ullamcorper, eget vulputate eros accumsan. In ipsum justo, egestas quis purus ut, consectetur viverra lacus. Curabitur porttitor auctor urna, eget consectetur odio egestas ac. Maecenas vitae volutpat ligula. Aliquam massa orci, volutpat luctus sagittis vitae, lacinia nec sem. Sed accumsan nulla ipsum, id facilisis augue volutpat in. Nullam consequat tempor turpis vitae vestibulum. Fusce ut elit quis felis egestas accumsan eu id lectus. Etiam a purus aliquet, consequat risus eu, ultricies tellus.
      </span>
    </Route>
  </main>
  <footer>
    <a class="github-link" href="https://github.com/KebabWarriors" style="none"><h3>Kebab warriors</h3></a>
  </footer>
</Router>

