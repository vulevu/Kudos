



<!DOCTYPE html>
<html lang="en" class="">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    
    
    <title>bootstrap/carousel.js at master · twbs/bootstrap · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="twbs/bootstrap" name="twitter:title" /><meta content="bootstrap - The most popular HTML, CSS, and JavaScript framework for developing responsive, mobile first projects on the web." name="twitter:description" /><meta content="https://avatars1.githubusercontent.com/u/2918581?v=3&amp;s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars1.githubusercontent.com/u/2918581?v=3&amp;s=400" property="og:image" /><meta content="twbs/bootstrap" property="og:title" /><meta content="https://github.com/twbs/bootstrap" property="og:url" /><meta content="bootstrap - The most popular HTML, CSS, and JavaScript framework for developing responsive, mobile first projects on the web." property="og:description" />

      <meta name="browser-stats-url" content="/_stats">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035">
    
    <meta name="pjax-timeout" content="1000">
    

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="4D693D53:2AEE:4903857:54A728CB" name="octolytics-dimension-request_id" />
    
    <meta content="Rails, view, blob#show" name="analytics-event" />

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="hPMePMyJwyFITDmgwyK+NYo+JxAf76+Dc3PXWoBYtHSuTIAwXM94MR69WKMZGOiXoLUgJmYpSwLqWrJ96OVCUA==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-9bcf5def7eb44e2a101b20aaecf3707f4b0a10ab8f4d6eebec29371f821c4b29.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://assets-cdn.github.com/assets/github2-988ddda9ae733ab44f308db199cb53eb70c7d0197679297459104380a8d923b3.css" media="all" rel="stylesheet" type="text/css" />
    
    


    <meta http-equiv="x-pjax-version" content="8adfdb5fdc7bd044b4c0142729d0410c">

      
  <meta name="description" content="bootstrap - The most popular HTML, CSS, and JavaScript framework for developing responsive, mobile first projects on the web.">
  <meta name="go-import" content="github.com/twbs/bootstrap git https://github.com/twbs/bootstrap.git">

  <meta content="2918581" name="octolytics-dimension-user_id" /><meta content="twbs" name="octolytics-dimension-user_login" /><meta content="2126244" name="octolytics-dimension-repository_id" /><meta content="twbs/bootstrap" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="2126244" name="octolytics-dimension-repository_network_root_id" /><meta content="twbs/bootstrap" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/twbs/bootstrap/commits/master.atom" rel="alternate" title="Recent Commits to bootstrap:master" type="application/atom+xml">

  </head>


  <body class="logged_out  env-production windows vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      
      <div class="header header-logged-out" role="banner">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/" ga-data-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions" role="navigation">
        <a class="button primary" href="/join" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign up</a>
      <a class="button" href="/login?return_to=%2Ftwbs%2Fbootstrap%2Fblob%2Fmaster%2Fjs%2Fcarousel.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
    </div>

    <div class="site-search repo-scope js-site-search" role="search">
      <form accept-charset="UTF-8" action="/twbs/bootstrap/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/twbs/bootstrap/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <input type="text"
    class="js-site-search-field is-clearable"
    data-hotkey="s"
    name="q"
    placeholder="Search"
    data-global-scope-placeholder="Search GitHub"
    data-repo-scope-placeholder="Search"
    tabindex="1"
    autocapitalize="off">
  <div class="scope-badge">This repository</div>
</form>
    </div>

      <ul class="header-nav left" role="navigation">
          <li class="header-nav-item">
            <a class="header-nav-link" href="/explore" data-ga-click="(Logged out) Header, go to explore, text:explore">Explore</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/features" data-ga-click="(Logged out) Header, go to features, text:features">Features</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://enterprise.github.com/" data-ga-click="(Logged out) Header, go to enterprise, text:enterprise">Enterprise</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/blog" data-ga-click="(Logged out) Header, go to blog, text:blog">Blog</a>
          </li>
      </ul>

  </div>
</div>



      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        
<ul class="pagehead-actions">


  <li>
      <a href="/login?return_to=%2Ftwbs%2Fbootstrap"
    class="minibutton with-count star-button tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <span class="octicon octicon-star"></span>
    Star
  </a>

    <a class="social-count js-social-count" href="/twbs/bootstrap/stargazers">
      76,138
    </a>

  </li>

    <li>
      <a href="/login?return_to=%2Ftwbs%2Fbootstrap"
        class="minibutton with-count js-toggler-target fork-button tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-repo-forked"></span>
        Fork
      </a>
      <a href="/twbs/bootstrap/network" class="social-count">
        29,020
      </a>
    </li>
</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/twbs" class="url fn" itemprop="url" rel="author"><span itemprop="title">twbs</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/twbs/bootstrap" class="js-current-repository" data-pjax="#js-repo-pjax-container">bootstrap</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            
<nav class="sunken-menu repo-nav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container"
     data-issue-count-url="/twbs/bootstrap/issues/counts">
  <ul class="sunken-menu-group">
    <li class="tooltipped tooltipped-w" aria-label="Code">
      <a href="/twbs/bootstrap" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /twbs/bootstrap">
        <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Issues">
        <a href="/twbs/bootstrap/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /twbs/bootstrap/issues">
          <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
          <span class="js-issue-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

    <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
      <a href="/twbs/bootstrap/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g p" data-selected-links="repo_pulls /twbs/bootstrap/pulls">
          <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
          <span class="js-pull-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>


  </ul>
  <div class="sunken-menu-separator"></div>
  <ul class="sunken-menu-group">

    <li class="tooltipped tooltipped-w" aria-label="Pulse">
      <a href="/twbs/bootstrap/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-selected-links="pulse /twbs/bootstrap/pulse">
        <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

    <li class="tooltipped tooltipped-w" aria-label="Graphs">
      <a href="/twbs/bootstrap/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-selected-links="repo_graphs repo_contributors /twbs/bootstrap/graphs">
        <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>
  </ul>


</nav>

              <div class="only-with-full-nav">
                
  
<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/twbs/bootstrap.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/twbs/bootstrap" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>



<p class="clone-options">You can clone with
  <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a> or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>


  <a href="http://windows.github.com" class="minibutton sidebar-button" title="Save twbs/bootstrap to your computer and use it in GitHub Desktop." aria-label="Save twbs/bootstrap to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

                <a href="/twbs/bootstrap/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download the contents of twbs/bootstrap as a zip file"
                   title="Download the contents of twbs/bootstrap as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          

<a href="/twbs/bootstrap/blob/57260f16b364e4cb559cd65159197fd1cf5248f7/js/carousel.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:d5e1014dd297abedc2acea4a2e5aa15d -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu js-menu-container js-select-menu left">
  <span class="minibutton select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/blob/bump-less/js/carousel.js"
                 data-name="bump-less"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="bump-less">bump-less</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/blob/derp/js/carousel.js"
                 data-name="derp"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="derp">derp</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/blob/docs-anchors/js/carousel.js"
                 data-name="docs-anchors"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="docs-anchors">docs-anchors</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/blob/fix-ie-modal-scrollbar-for-realz/js/carousel.js"
                 data-name="fix-ie-modal-scrollbar-for-realz"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="fix-ie-modal-scrollbar-for-realz">fix-ie-modal-scrollbar-for-realz</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/blob/gh-pages/js/carousel.js"
                 data-name="gh-pages"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="gh-pages">gh-pages</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/blob/grunt-contrib-htmlmin/js/carousel.js"
                 data-name="grunt-contrib-htmlmin"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="grunt-contrib-htmlmin">grunt-contrib-htmlmin</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/blob/master/js/carousel.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/blob/move-inline-css/js/carousel.js"
                 data-name="move-inline-css"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="move-inline-css">move-inline-css</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/blob/offline-html-validation/js/carousel.js"
                 data-name="offline-html-validation"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="offline-html-validation">offline-html-validation</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/blob/v3.3.0/js/carousel.js"
                 data-name="v3.3.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v3.3.0">v3.3.0</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/tree/v3.3.1/js/carousel.js"
                 data-name="v3.3.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v3.3.1">v3.3.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/tree/v3.3.0/js/carousel.js"
                 data-name="v3.3.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v3.3.0">v3.3.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/tree/v3.2.0/js/carousel.js"
                 data-name="v3.2.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v3.2.0">v3.2.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/tree/v3.1.1/js/carousel.js"
                 data-name="v3.1.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v3.1.1">v3.1.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/tree/v3.1.0/js/carousel.js"
                 data-name="v3.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v3.1.0">v3.1.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/tree/v3.0.3/js/carousel.js"
                 data-name="v3.0.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v3.0.3">v3.0.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/tree/v3.0.2/js/carousel.js"
                 data-name="v3.0.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v3.0.2">v3.0.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/tree/v3.0.1/js/carousel.js"
                 data-name="v3.0.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v3.0.1">v3.0.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/tree/v3.0.0-rc.2/js/carousel.js"
                 data-name="v3.0.0-rc.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v3.0.0-rc.2">v3.0.0-rc.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/tree/v3.0.0-rc1/js/carousel.js"
                 data-name="v3.0.0-rc1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v3.0.0-rc1">v3.0.0-rc1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/tree/v3.0.0/js/carousel.js"
                 data-name="v3.0.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v3.0.0">v3.0.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/tree/v2.3.2/js/carousel.js"
                 data-name="v2.3.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.3.2">v2.3.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/tree/v2.3.1/js/carousel.js"
                 data-name="v2.3.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.3.1">v2.3.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/tree/v2.3.0/js/carousel.js"
                 data-name="v2.3.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.3.0">v2.3.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/tree/v2.2.2/js/carousel.js"
                 data-name="v2.2.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.2.2">v2.2.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/tree/v2.2.1/js/carousel.js"
                 data-name="v2.2.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.2.1">v2.2.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/tree/v2.2.0/js/carousel.js"
                 data-name="v2.2.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.2.0">v2.2.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/tree/v2.1.1/js/carousel.js"
                 data-name="v2.1.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.1.1">v2.1.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/tree/v2.1.0/js/carousel.js"
                 data-name="v2.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.1.0">v2.1.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/tree/v2.0.4/js/carousel.js"
                 data-name="v2.0.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.0.4">v2.0.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/tree/v2.0.3/js/carousel.js"
                 data-name="v2.0.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.0.3">v2.0.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/tree/v2.0.2/js/carousel.js"
                 data-name="v2.0.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.0.2">v2.0.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/tree/v2.0.1/js/carousel.js"
                 data-name="v2.0.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.0.1">v2.0.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/tree/v2.0.0/js/carousel.js"
                 data-name="v2.0.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.0.0">v2.0.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/tree/v1.4.0/js/carousel.js"
                 data-name="v1.4.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.4.0">v1.4.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/tree/v1.3.0/js/carousel.js"
                 data-name="v1.3.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0">v1.3.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/tree/v1.2.0/js/carousel.js"
                 data-name="v1.2.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.0">v1.2.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/tree/v1.1.1/js/carousel.js"
                 data-name="v1.1.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.1.1">v1.1.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/tree/v1.1.0/js/carousel.js"
                 data-name="v1.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.1.0">v1.1.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twbs/bootstrap/tree/v1.0.0/js/carousel.js"
                 data-name="v1.0.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.0">v1.0.0</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="button-group right">
    <a href="/twbs/bootstrap/find/master"
          class="js-show-file-finder minibutton empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
  </div>

  <div class="breadcrumb js-zeroclipboard-target">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/twbs/bootstrap" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">bootstrap</span></a></span></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/twbs/bootstrap/tree/master/js" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">js</span></a></span><span class="separator">/</span><strong class="final-path">carousel.js</strong>
  </div>
</div>


  <div class="commit file-history-tease">
    <div class="file-history-tease-header">
        <img alt="Zlatan Vasović" class="avatar" data-user="2725611" height="24" src="https://avatars0.githubusercontent.com/u/2725611?v=3&amp;s=48" width="24" />
        <span class="author"><a href="/ZDroid" rel="contributor">ZDroid</a></span>
        <time datetime="2015-01-01T00:23:48Z" is="relative-time">Jan 1, 2015</time>
        <div class="commit-title">
            <a href="/twbs/bootstrap/commit/576230b92ae5a082eb8e058dc2fab7c67c99bd19" class="message" data-pjax="true" title="Happy New Year :santa:">Happy New Year <img class="emoji" title=":santa:" alt=":santa:" src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f385.png" height="20" width="20" align="absmiddle"></a>
        </div>
    </div>

    <div class="participation">
      <p class="quickstat">
        <a href="#blob_contributors_box" rel="facebox">
          <strong>15</strong>
           contributors
        </a>
      </p>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="fat" href="/twbs/bootstrap/commits/master/js/carousel.js?author=fat"><img alt="F A T" class="avatar" data-user="169705" height="20" src="https://avatars1.githubusercontent.com/u/169705?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="cvrebert" href="/twbs/bootstrap/commits/master/js/carousel.js?author=cvrebert"><img alt="Chris Rebert" class="avatar" data-user="419884" height="20" src="https://avatars0.githubusercontent.com/u/419884?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="mdo" href="/twbs/bootstrap/commits/master/js/carousel.js?author=mdo"><img alt="Mark Otto" class="avatar" data-user="98681" height="20" src="https://avatars0.githubusercontent.com/u/98681?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="hnrch02" href="/twbs/bootstrap/commits/master/js/carousel.js?author=hnrch02"><img alt="Heinrich Fenkart" class="avatar" data-user="1068978" height="20" src="https://avatars3.githubusercontent.com/u/1068978?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="ZDroid" href="/twbs/bootstrap/commits/master/js/carousel.js?author=ZDroid"><img alt="Zlatan Vasović" class="avatar" data-user="2725611" height="20" src="https://avatars2.githubusercontent.com/u/2725611?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="XhmikosR" href="/twbs/bootstrap/commits/master/js/carousel.js?author=XhmikosR"><img alt="XhmikosR" class="avatar" data-user="349621" height="20" src="https://avatars1.githubusercontent.com/u/349621?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="ktzhu" href="/twbs/bootstrap/commits/master/js/carousel.js?author=ktzhu"><img alt="katie zhu" class="avatar" data-user="530279" height="20" src="https://avatars2.githubusercontent.com/u/530279?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="colllin" href="/twbs/bootstrap/commits/master/js/carousel.js?author=colllin"><img alt="Collin Donahue-Oponski" class="avatar" data-user="185923" height="20" src="https://avatars2.githubusercontent.com/u/185923?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="danielboendergaard" href="/twbs/bootstrap/commits/master/js/carousel.js?author=danielboendergaard"><img alt="Daniel Bøndergaard" class="avatar" data-user="314877" height="20" src="https://avatars1.githubusercontent.com/u/314877?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="daguej" href="/twbs/bootstrap/commits/master/js/carousel.js?author=daguej"><img alt="Josh Dague" class="avatar" data-user="354349" height="20" src="https://avatars2.githubusercontent.com/u/354349?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="Rowno" href="/twbs/bootstrap/commits/master/js/carousel.js?author=Rowno"><img alt="Roland Warmerdam" class="avatar" data-user="605501" height="20" src="https://avatars3.githubusercontent.com/u/605501?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="ibash" href="/twbs/bootstrap/commits/master/js/carousel.js?author=ibash"><img alt="Islam Sharabash" class="avatar" data-user="204566" height="20" src="https://avatars3.githubusercontent.com/u/204566?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="burnsra" href="/twbs/bootstrap/commits/master/js/carousel.js?author=burnsra"><img alt="Robert Burns" class="avatar" data-user="171054" height="20" src="https://avatars1.githubusercontent.com/u/171054?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="juthilo" href="/twbs/bootstrap/commits/master/js/carousel.js?author=juthilo"><img alt="Julian Thilo" class="avatar" data-user="3535675" height="20" src="https://avatars1.githubusercontent.com/u/3535675?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="Ben-Russell" href="/twbs/bootstrap/commits/master/js/carousel.js?author=Ben-Russell"><img alt="Ben-Russell" class="avatar" data-user="4826551" height="20" src="https://avatars3.githubusercontent.com/u/4826551?v=3&amp;s=40" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="F A T" data-user="169705" height="24" src="https://avatars3.githubusercontent.com/u/169705?v=3&amp;s=48" width="24" />
            <a href="/fat">fat</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Chris Rebert" data-user="419884" height="24" src="https://avatars2.githubusercontent.com/u/419884?v=3&amp;s=48" width="24" />
            <a href="/cvrebert">cvrebert</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Mark Otto" data-user="98681" height="24" src="https://avatars2.githubusercontent.com/u/98681?v=3&amp;s=48" width="24" />
            <a href="/mdo">mdo</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Heinrich Fenkart" data-user="1068978" height="24" src="https://avatars1.githubusercontent.com/u/1068978?v=3&amp;s=48" width="24" />
            <a href="/hnrch02">hnrch02</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Zlatan Vasović" data-user="2725611" height="24" src="https://avatars0.githubusercontent.com/u/2725611?v=3&amp;s=48" width="24" />
            <a href="/ZDroid">ZDroid</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="XhmikosR" data-user="349621" height="24" src="https://avatars3.githubusercontent.com/u/349621?v=3&amp;s=48" width="24" />
            <a href="/XhmikosR">XhmikosR</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="katie zhu" data-user="530279" height="24" src="https://avatars0.githubusercontent.com/u/530279?v=3&amp;s=48" width="24" />
            <a href="/ktzhu">ktzhu</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Collin Donahue-Oponski" data-user="185923" height="24" src="https://avatars0.githubusercontent.com/u/185923?v=3&amp;s=48" width="24" />
            <a href="/colllin">colllin</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Daniel Bøndergaard" data-user="314877" height="24" src="https://avatars3.githubusercontent.com/u/314877?v=3&amp;s=48" width="24" />
            <a href="/danielboendergaard">danielboendergaard</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Josh Dague" data-user="354349" height="24" src="https://avatars0.githubusercontent.com/u/354349?v=3&amp;s=48" width="24" />
            <a href="/daguej">daguej</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Roland Warmerdam" data-user="605501" height="24" src="https://avatars1.githubusercontent.com/u/605501?v=3&amp;s=48" width="24" />
            <a href="/Rowno">Rowno</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Islam Sharabash" data-user="204566" height="24" src="https://avatars1.githubusercontent.com/u/204566?v=3&amp;s=48" width="24" />
            <a href="/ibash">ibash</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Robert Burns" data-user="171054" height="24" src="https://avatars3.githubusercontent.com/u/171054?v=3&amp;s=48" width="24" />
            <a href="/burnsra">burnsra</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Julian Thilo" data-user="3535675" height="24" src="https://avatars3.githubusercontent.com/u/3535675?v=3&amp;s=48" width="24" />
            <a href="/juthilo">juthilo</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Ben-Russell" data-user="4826551" height="24" src="https://avatars1.githubusercontent.com/u/4826551?v=3&amp;s=48" width="24" />
            <a href="/Ben-Russell">Ben-Russell</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
          <span>238 lines (183 sloc)</span>
          <span class="meta-divider"></span>
        <span>7.121 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
          <a href="/twbs/bootstrap/raw/master/js/carousel.js" class="minibutton " id="raw-url">Raw</a>
            <a href="/twbs/bootstrap/blame/master/js/carousel.js" class="minibutton js-update-url-with-hash">Blame</a>
          <a href="/twbs/bootstrap/commits/master/js/carousel.js" class="minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->

          <a class="octicon-button tooltipped tooltipped-nw"
             href="http://windows.github.com" aria-label="Open this file in GitHub for Windows">
              <span class="octicon octicon-device-desktop"></span>
          </a>

            <a class="octicon-button disabled tooltipped tooltipped-w" href="#"
               aria-label="You must be signed in to make or propose changes"><span class="octicon octicon-pencil"></span></a>

          <a class="octicon-button danger disabled tooltipped tooltipped-w" href="#"
             aria-label="You must be signed in to make or propose changes">
          <span class="octicon octicon-trashcan"></span>
        </a>
      </div><!-- /.actions -->
    </div>
    

  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size-8 js-file-line-container">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code js-file-line"><span class="pl-c">/* ========================================================================</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code js-file-line"><span class="pl-c"> * Bootstrap: carousel.js v3.3.1</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code js-file-line"><span class="pl-c"> * http://getbootstrap.com/javascript/#carousel</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code js-file-line"><span class="pl-c"> * ========================================================================</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code js-file-line"><span class="pl-c"> * Copyright 2011-2015 Twitter, Inc.</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code js-file-line"><span class="pl-c"> * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)</span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code js-file-line"><span class="pl-c"> * ======================================================================== */</span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code js-file-line"><span class="pl-k">+</span><span class="pl-st">function</span> (<span class="pl-vpf">$</span>) {</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code js-file-line">  <span class="pl-s1"><span class="pl-pds">&#39;</span>use strict<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code js-file-line">  <span class="pl-c">// CAROUSEL CLASS DEFINITION</span></td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code js-file-line">  <span class="pl-c">// =========================</span></td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code js-file-line">  <span class="pl-s">var</span> <span class="pl-en">Carousel</span> <span class="pl-k">=</span> <span class="pl-st">function</span> (<span class="pl-vpf">element</span>, <span class="pl-vpf">options</span>) {</td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code js-file-line">    <span class="pl-v">this</span>.$element    <span class="pl-k">=</span> $(element)</td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code js-file-line">    <span class="pl-v">this</span>.$indicators <span class="pl-k">=</span> <span class="pl-v">this</span>.$element.<span class="pl-s3">find</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>.carousel-indicators<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code js-file-line">    <span class="pl-v">this</span>.<span class="pl-sc">options</span>     <span class="pl-k">=</span> options</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code js-file-line">    <span class="pl-v">this</span>.paused      <span class="pl-k">=</span></td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code js-file-line">    <span class="pl-v">this</span>.sliding     <span class="pl-k">=</span></td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code js-file-line">    <span class="pl-v">this</span>.interval    <span class="pl-k">=</span></td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code js-file-line">    <span class="pl-v">this</span>.$active     <span class="pl-k">=</span></td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code js-file-line">    <span class="pl-v">this</span>.$items      <span class="pl-k">=</span> <span class="pl-c1">null</span></td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code js-file-line">    <span class="pl-v">this</span>.<span class="pl-sc">options</span>.keyboard <span class="pl-k">&amp;&amp;</span> <span class="pl-v">this</span>.$element.on(<span class="pl-s1"><span class="pl-pds">&#39;</span>keydown.bs.carousel<span class="pl-pds">&#39;</span></span>, $.proxy(<span class="pl-v">this</span>.keydown, <span class="pl-v">this</span>))</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code js-file-line">    <span class="pl-v">this</span>.<span class="pl-sc">options</span>.pause <span class="pl-k">==</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>hover<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>ontouchstart<span class="pl-pds">&#39;</span></span> <span class="pl-k">in</span> <span class="pl-s3">document</span>.<span class="pl-sc">documentElement</span>) <span class="pl-k">&amp;&amp;</span> <span class="pl-v">this</span>.$element</td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code js-file-line">      .on(<span class="pl-s1"><span class="pl-pds">&#39;</span>mouseenter.bs.carousel<span class="pl-pds">&#39;</span></span>, $.proxy(<span class="pl-v">this</span>.pause, <span class="pl-v">this</span>))</td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code js-file-line">      .on(<span class="pl-s1"><span class="pl-pds">&#39;</span>mouseleave.bs.carousel<span class="pl-pds">&#39;</span></span>, $.proxy(<span class="pl-v">this</span>.cycle, <span class="pl-v">this</span>))</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code js-file-line">  Carousel.VERSION  <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>3.3.1<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code js-file-line">  Carousel.TRANSITION_DURATION <span class="pl-k">=</span> <span class="pl-c1">600</span></td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code js-file-line">  Carousel.DEFAULTS <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code js-file-line">    interval<span class="pl-k">:</span> <span class="pl-c1">5000</span>,</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code js-file-line">    pause<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>hover<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code js-file-line">    wrap<span class="pl-k">:</span> <span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code js-file-line">    keyboard<span class="pl-k">:</span> <span class="pl-c1">true</span></td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code js-file-line">  <span class="pl-s3">Carousel</span>.<span class="pl-sc">prototype</span>.<span class="pl-en">keydown</span> <span class="pl-k">=</span> <span class="pl-st">function</span> (<span class="pl-vpf">e</span>) {</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code js-file-line">    <span class="pl-k">if</span> (<span class="pl-sr"><span class="pl-pds">/</span>input<span class="pl-k">|</span>textarea<span class="pl-pds">/</span>i</span>.<span class="pl-s3">test</span>(e.<span class="pl-sc">target</span>.<span class="pl-sc">tagName</span>)) <span class="pl-k">return</span></td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code js-file-line">    <span class="pl-k">switch</span> (e.which) {</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code js-file-line">      <span class="pl-k">case</span> <span class="pl-c1">37</span><span class="pl-k">:</span> <span class="pl-v">this</span>.prev(); <span class="pl-k">break</span></td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code js-file-line">      <span class="pl-k">case</span> <span class="pl-c1">39</span><span class="pl-k">:</span> <span class="pl-v">this</span>.<span class="pl-sc">next</span>(); <span class="pl-k">break</span></td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code js-file-line">      <span class="pl-k">default</span><span class="pl-k">:</span> <span class="pl-k">return</span></td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code js-file-line">    e.preventDefault()</td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code js-file-line">  <span class="pl-s3">Carousel</span>.<span class="pl-sc">prototype</span>.<span class="pl-en">cycle</span> <span class="pl-k">=</span> <span class="pl-st">function</span> (<span class="pl-vpf">e</span>) {</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code js-file-line">    e <span class="pl-k">||</span> (<span class="pl-v">this</span>.paused <span class="pl-k">=</span> <span class="pl-c1">false</span>)</td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code js-file-line">    <span class="pl-v">this</span>.interval <span class="pl-k">&amp;&amp;</span> <span class="pl-s3">clearInterval</span>(<span class="pl-v">this</span>.interval)</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code js-file-line">    <span class="pl-v">this</span>.<span class="pl-sc">options</span>.interval</td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code js-file-line">      <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-v">this</span>.paused</td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code js-file-line">      <span class="pl-k">&amp;&amp;</span> (<span class="pl-v">this</span>.interval <span class="pl-k">=</span> <span class="pl-s3">setInterval</span>($.proxy(<span class="pl-v">this</span>.<span class="pl-sc">next</span>, <span class="pl-v">this</span>), <span class="pl-v">this</span>.<span class="pl-sc">options</span>.interval))</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code js-file-line">    <span class="pl-k">return</span> <span class="pl-v">this</span></td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code js-file-line">  <span class="pl-s3">Carousel</span>.<span class="pl-sc">prototype</span>.<span class="pl-en">getItemIndex</span> <span class="pl-k">=</span> <span class="pl-st">function</span> (<span class="pl-vpf">item</span>) {</td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code js-file-line">    <span class="pl-v">this</span>.$items <span class="pl-k">=</span> item.<span class="pl-sc">parent</span>().children(<span class="pl-s1"><span class="pl-pds">&#39;</span>.item<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code js-file-line">    <span class="pl-k">return</span> <span class="pl-v">this</span>.$items.<span class="pl-sc">index</span>(item <span class="pl-k">||</span> <span class="pl-v">this</span>.$active)</td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code js-file-line">  <span class="pl-s3">Carousel</span>.<span class="pl-sc">prototype</span>.<span class="pl-en">getItemForDirection</span> <span class="pl-k">=</span> <span class="pl-st">function</span> (<span class="pl-vpf">direction</span>, <span class="pl-vpf">active</span>) {</td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code js-file-line">    <span class="pl-s">var</span> activeIndex <span class="pl-k">=</span> <span class="pl-v">this</span>.getItemIndex(active)</td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code js-file-line">    <span class="pl-s">var</span> willWrap <span class="pl-k">=</span> (direction <span class="pl-k">==</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>prev<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> activeIndex <span class="pl-k">===</span> <span class="pl-c1">0</span>)</td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code js-file-line">                <span class="pl-k">||</span> (direction <span class="pl-k">==</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>next<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> activeIndex <span class="pl-k">==</span> (<span class="pl-v">this</span>.$items.<span class="pl-sc">length</span> <span class="pl-k">-</span> <span class="pl-c1">1</span>))</td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code js-file-line">    <span class="pl-k">if</span> (willWrap <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-v">this</span>.<span class="pl-sc">options</span>.wrap) <span class="pl-k">return</span> active</td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code js-file-line">    <span class="pl-s">var</span> delta <span class="pl-k">=</span> direction <span class="pl-k">==</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>prev<span class="pl-pds">&#39;</span></span> <span class="pl-k">?</span> <span class="pl-k">-</span><span class="pl-c1">1</span> <span class="pl-k">:</span> <span class="pl-c1">1</span></td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code js-file-line">    <span class="pl-s">var</span> itemIndex <span class="pl-k">=</span> (activeIndex <span class="pl-k">+</span> delta) <span class="pl-k">%</span> <span class="pl-v">this</span>.$items.<span class="pl-sc">length</span></td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code js-file-line">    <span class="pl-k">return</span> <span class="pl-v">this</span>.$items.eq(itemIndex)</td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code js-file-line">  <span class="pl-s3">Carousel</span>.<span class="pl-sc">prototype</span>.<span class="pl-en">to</span> <span class="pl-k">=</span> <span class="pl-st">function</span> (<span class="pl-vpf">pos</span>) {</td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code js-file-line">    <span class="pl-s">var</span> that        <span class="pl-k">=</span> <span class="pl-v">this</span></td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code js-file-line">    <span class="pl-s">var</span> activeIndex <span class="pl-k">=</span> <span class="pl-v">this</span>.getItemIndex(<span class="pl-v">this</span>.$active <span class="pl-k">=</span> <span class="pl-v">this</span>.$element.<span class="pl-s3">find</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>.item.active<span class="pl-pds">&#39;</span></span>))</td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code js-file-line">    <span class="pl-k">if</span> (pos <span class="pl-k">&gt;</span> (<span class="pl-v">this</span>.$items.<span class="pl-sc">length</span> <span class="pl-k">-</span> <span class="pl-c1">1</span>) <span class="pl-k">||</span> pos <span class="pl-k">&lt;</span> <span class="pl-c1">0</span>) <span class="pl-k">return</span></td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code js-file-line">    <span class="pl-k">if</span> (<span class="pl-v">this</span>.sliding)       <span class="pl-k">return</span> <span class="pl-v">this</span>.$element.one(<span class="pl-s1"><span class="pl-pds">&#39;</span>slid.bs.carousel<span class="pl-pds">&#39;</span></span>, <span class="pl-st">function</span> () { that.to(pos) }) <span class="pl-c">// yes, &quot;slid&quot;</span></td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code js-file-line">    <span class="pl-k">if</span> (activeIndex <span class="pl-k">==</span> pos) <span class="pl-k">return</span> <span class="pl-v">this</span>.pause().cycle()</td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code js-file-line">    <span class="pl-k">return</span> <span class="pl-v">this</span>.slide(pos <span class="pl-k">&gt;</span> activeIndex <span class="pl-k">?</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>next<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>prev<span class="pl-pds">&#39;</span></span>, <span class="pl-v">this</span>.$items.eq(pos))</td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code js-file-line">  <span class="pl-s3">Carousel</span>.<span class="pl-sc">prototype</span>.<span class="pl-en">pause</span> <span class="pl-k">=</span> <span class="pl-st">function</span> (<span class="pl-vpf">e</span>) {</td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code js-file-line">    e <span class="pl-k">||</span> (<span class="pl-v">this</span>.paused <span class="pl-k">=</span> <span class="pl-c1">true</span>)</td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code js-file-line">    <span class="pl-k">if</span> (<span class="pl-v">this</span>.$element.<span class="pl-s3">find</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>.next, .prev<span class="pl-pds">&#39;</span></span>).<span class="pl-sc">length</span> <span class="pl-k">&amp;&amp;</span> $.support.transition) {</td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code js-file-line">      <span class="pl-v">this</span>.$element.trigger($.support.transition.end)</td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code js-file-line">      <span class="pl-v">this</span>.cycle(<span class="pl-c1">true</span>)</td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code js-file-line">    <span class="pl-v">this</span>.interval <span class="pl-k">=</span> <span class="pl-s3">clearInterval</span>(<span class="pl-v">this</span>.interval)</td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code js-file-line">    <span class="pl-k">return</span> <span class="pl-v">this</span></td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code js-file-line">  <span class="pl-s3">Carousel</span>.<span class="pl-sc">prototype</span>.<span class="pl-en">next</span> <span class="pl-k">=</span> <span class="pl-st">function</span> () {</td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code js-file-line">    <span class="pl-k">if</span> (<span class="pl-v">this</span>.sliding) <span class="pl-k">return</span></td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code js-file-line">    <span class="pl-k">return</span> <span class="pl-v">this</span>.slide(<span class="pl-s1"><span class="pl-pds">&#39;</span>next<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code js-file-line">  <span class="pl-s3">Carousel</span>.<span class="pl-sc">prototype</span>.<span class="pl-en">prev</span> <span class="pl-k">=</span> <span class="pl-st">function</span> () {</td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code js-file-line">    <span class="pl-k">if</span> (<span class="pl-v">this</span>.sliding) <span class="pl-k">return</span></td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code js-file-line">    <span class="pl-k">return</span> <span class="pl-v">this</span>.slide(<span class="pl-s1"><span class="pl-pds">&#39;</span>prev<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code js-file-line">  <span class="pl-s3">Carousel</span>.<span class="pl-sc">prototype</span>.<span class="pl-en">slide</span> <span class="pl-k">=</span> <span class="pl-st">function</span> (<span class="pl-vpf">type</span>, <span class="pl-vpf">next</span>) {</td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code js-file-line">    <span class="pl-s">var</span> $active   <span class="pl-k">=</span> <span class="pl-v">this</span>.$element.<span class="pl-s3">find</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>.item.active<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code js-file-line">    <span class="pl-s">var</span> $next     <span class="pl-k">=</span> next <span class="pl-k">||</span> <span class="pl-v">this</span>.getItemForDirection(type, $active)</td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code js-file-line">    <span class="pl-s">var</span> isCycling <span class="pl-k">=</span> <span class="pl-v">this</span>.interval</td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code js-file-line">    <span class="pl-s">var</span> direction <span class="pl-k">=</span> type <span class="pl-k">==</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>next<span class="pl-pds">&#39;</span></span> <span class="pl-k">?</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>left<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>right<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code js-file-line">    <span class="pl-s">var</span> that      <span class="pl-k">=</span> <span class="pl-v">this</span></td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code js-file-line">    <span class="pl-k">if</span> ($next.hasClass(<span class="pl-s1"><span class="pl-pds">&#39;</span>active<span class="pl-pds">&#39;</span></span>)) <span class="pl-k">return</span> (<span class="pl-v">this</span>.sliding <span class="pl-k">=</span> <span class="pl-c1">false</span>)</td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code js-file-line">    <span class="pl-s">var</span> relatedTarget <span class="pl-k">=</span> $next[<span class="pl-c1">0</span>]</td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code js-file-line">    <span class="pl-s">var</span> slideEvent <span class="pl-k">=</span> $.Event(<span class="pl-s1"><span class="pl-pds">&#39;</span>slide.bs.carousel<span class="pl-pds">&#39;</span></span>, {</td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code js-file-line">      relatedTarget<span class="pl-k">:</span> relatedTarget,</td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code js-file-line">      direction<span class="pl-k">:</span> direction</td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code js-file-line">    })</td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code js-file-line">    <span class="pl-v">this</span>.$element.trigger(slideEvent)</td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code js-file-line">    <span class="pl-k">if</span> (slideEvent.isDefaultPrevented()) <span class="pl-k">return</span></td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code js-file-line">    <span class="pl-v">this</span>.sliding <span class="pl-k">=</span> <span class="pl-c1">true</span></td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code js-file-line">    isCycling <span class="pl-k">&amp;&amp;</span> <span class="pl-v">this</span>.pause()</td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code js-file-line">    <span class="pl-k">if</span> (<span class="pl-v">this</span>.$indicators.<span class="pl-sc">length</span>) {</td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code js-file-line">      <span class="pl-v">this</span>.$indicators.<span class="pl-s3">find</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>.active<span class="pl-pds">&#39;</span></span>).removeClass(<span class="pl-s1"><span class="pl-pds">&#39;</span>active<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code js-file-line">      <span class="pl-s">var</span> $nextIndicator <span class="pl-k">=</span> $(<span class="pl-v">this</span>.$indicators.children()[<span class="pl-v">this</span>.getItemIndex($next)])</td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code js-file-line">      $nextIndicator <span class="pl-k">&amp;&amp;</span> $nextIndicator.addClass(<span class="pl-s1"><span class="pl-pds">&#39;</span>active<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code js-file-line">    <span class="pl-s">var</span> slidEvent <span class="pl-k">=</span> $.Event(<span class="pl-s1"><span class="pl-pds">&#39;</span>slid.bs.carousel<span class="pl-pds">&#39;</span></span>, { relatedTarget<span class="pl-k">:</span> relatedTarget, direction<span class="pl-k">:</span> direction }) <span class="pl-c">// yes, &quot;slid&quot;</span></td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code js-file-line">    <span class="pl-k">if</span> ($.support.transition <span class="pl-k">&amp;&amp;</span> <span class="pl-v">this</span>.$element.hasClass(<span class="pl-s1"><span class="pl-pds">&#39;</span>slide<span class="pl-pds">&#39;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code js-file-line">      $next.addClass(type)</td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code js-file-line">      $next[<span class="pl-c1">0</span>].offsetWidth <span class="pl-c">// force reflow</span></td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code js-file-line">      $active.addClass(direction)</td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code js-file-line">      $next.addClass(direction)</td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code js-file-line">      $active</td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code js-file-line">        .one(<span class="pl-s1"><span class="pl-pds">&#39;</span>bsTransitionEnd<span class="pl-pds">&#39;</span></span>, <span class="pl-st">function</span> () {</td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code js-file-line">          $next.removeClass([type, direction].<span class="pl-s3">join</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span>)).addClass(<span class="pl-s1"><span class="pl-pds">&#39;</span>active<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code js-file-line">          $active.removeClass([<span class="pl-s1"><span class="pl-pds">&#39;</span>active<span class="pl-pds">&#39;</span></span>, direction].<span class="pl-s3">join</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span>))</td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code js-file-line">          that.sliding <span class="pl-k">=</span> <span class="pl-c1">false</span></td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code js-file-line">          <span class="pl-s3">setTimeout</span>(<span class="pl-st">function</span> () {</td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code js-file-line">            that.$element.trigger(slidEvent)</td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code js-file-line">          }, <span class="pl-c1">0</span>)</td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code js-file-line">        })</td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code js-file-line">        .emulateTransitionEnd(Carousel.TRANSITION_DURATION)</td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code js-file-line">    } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code js-file-line">      $active.removeClass(<span class="pl-s1"><span class="pl-pds">&#39;</span>active<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code js-file-line">      $next.addClass(<span class="pl-s1"><span class="pl-pds">&#39;</span>active<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code js-file-line">      <span class="pl-v">this</span>.sliding <span class="pl-k">=</span> <span class="pl-c1">false</span></td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code js-file-line">      <span class="pl-v">this</span>.$element.trigger(slidEvent)</td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code js-file-line">    isCycling <span class="pl-k">&amp;&amp;</span> <span class="pl-v">this</span>.cycle()</td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code js-file-line">    <span class="pl-k">return</span> <span class="pl-v">this</span></td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code js-file-line">  <span class="pl-c">// CAROUSEL PLUGIN DEFINITION</span></td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code js-file-line">  <span class="pl-c">// ==========================</span></td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code js-file-line">  <span class="pl-st">function</span> <span class="pl-en">Plugin</span>(<span class="pl-vpf">option</span>) {</td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code js-file-line">    <span class="pl-k">return</span> <span class="pl-v">this</span>.each(<span class="pl-st">function</span> () {</td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code js-file-line">      <span class="pl-s">var</span> $<span class="pl-v">this</span>   <span class="pl-k">=</span> $(<span class="pl-v">this</span>)</td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code js-file-line">      <span class="pl-s">var</span> data    <span class="pl-k">=</span> $<span class="pl-v">this</span>.<span class="pl-sc">data</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>bs.carousel<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code js-file-line">      <span class="pl-s">var</span> options <span class="pl-k">=</span> $.extend({}, Carousel.DEFAULTS, $<span class="pl-v">this</span>.<span class="pl-sc">data</span>(), <span class="pl-k">typeof</span> option <span class="pl-k">==</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>object<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> option)</td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code js-file-line">      <span class="pl-s">var</span> action  <span class="pl-k">=</span> <span class="pl-k">typeof</span> option <span class="pl-k">==</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span> <span class="pl-k">?</span> option <span class="pl-k">:</span> options.slide</td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code js-file-line">      <span class="pl-k">if</span> (<span class="pl-k">!</span>data) $<span class="pl-v">this</span>.<span class="pl-sc">data</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>bs.carousel<span class="pl-pds">&#39;</span></span>, (data <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Carousel</span>(<span class="pl-v">this</span>, options)))</td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code js-file-line">      <span class="pl-k">if</span> (<span class="pl-k">typeof</span> option <span class="pl-k">==</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>number<span class="pl-pds">&#39;</span></span>) data.to(option)</td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code js-file-line">      <span class="pl-k">else</span> <span class="pl-k">if</span> (action) data[action]()</td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code js-file-line">      <span class="pl-k">else</span> <span class="pl-k">if</span> (options.interval) data.pause().cycle()</td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code js-file-line">    })</td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code js-file-line">  <span class="pl-s">var</span> old <span class="pl-k">=</span> $.fn.carousel</td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code js-file-line">  $.fn.carousel             <span class="pl-k">=</span> <span class="pl-s3">Plugin</span></td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code js-file-line">  $.fn.carousel.Constructor <span class="pl-k">=</span> Carousel</td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code js-file-line">  <span class="pl-c">// CAROUSEL NO CONFLICT</span></td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code js-file-line">  <span class="pl-c">// ====================</span></td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code js-file-line">  <span class="pl-s3">$.fn.carousel</span>.<span class="pl-en">noConflict</span> <span class="pl-k">=</span> <span class="pl-st">function</span> () {</td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code js-file-line">    $.fn.carousel <span class="pl-k">=</span> old</td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code js-file-line">    <span class="pl-k">return</span> <span class="pl-v">this</span></td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code js-file-line">  <span class="pl-c">// CAROUSEL DATA-API</span></td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code js-file-line">  <span class="pl-c">// =================</span></td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code js-file-line">  <span class="pl-s">var</span> <span class="pl-en">clickHandler</span> <span class="pl-k">=</span> <span class="pl-st">function</span> (<span class="pl-vpf">e</span>) {</td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code js-file-line">    <span class="pl-s">var</span> href</td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code js-file-line">    <span class="pl-s">var</span> $<span class="pl-v">this</span>   <span class="pl-k">=</span> $(<span class="pl-v">this</span>)</td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code js-file-line">    <span class="pl-s">var</span> $target <span class="pl-k">=</span> $($<span class="pl-v">this</span>.attr(<span class="pl-s1"><span class="pl-pds">&#39;</span>data-target<span class="pl-pds">&#39;</span></span>) <span class="pl-k">||</span> (href <span class="pl-k">=</span> $<span class="pl-v">this</span>.attr(<span class="pl-s1"><span class="pl-pds">&#39;</span>href<span class="pl-pds">&#39;</span></span>)) <span class="pl-k">&amp;&amp;</span> href.<span class="pl-s3">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">.</span><span class="pl-k">*</span>(?=#<span class="pl-c1">[<span class="pl-k">^</span><span class="pl-c1">\s</span>]</span><span class="pl-k">+</span><span class="pl-k">$</span>)<span class="pl-pds">/</span></span>, <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>)) <span class="pl-c">// strip for ie7</span></td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">!</span>$target.hasClass(<span class="pl-s1"><span class="pl-pds">&#39;</span>carousel<span class="pl-pds">&#39;</span></span>)) <span class="pl-k">return</span></td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code js-file-line">    <span class="pl-s">var</span> options <span class="pl-k">=</span> $.extend({}, $target.<span class="pl-sc">data</span>(), $<span class="pl-v">this</span>.<span class="pl-sc">data</span>())</td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code js-file-line">    <span class="pl-s">var</span> slideIndex <span class="pl-k">=</span> $<span class="pl-v">this</span>.attr(<span class="pl-s1"><span class="pl-pds">&#39;</span>data-slide-to<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code js-file-line">    <span class="pl-k">if</span> (slideIndex) options.interval <span class="pl-k">=</span> <span class="pl-c1">false</span></td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code js-file-line">    <span class="pl-s3">Plugin</span>.<span class="pl-s3">call</span>($target, options)</td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code js-file-line">    <span class="pl-k">if</span> (slideIndex) {</td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code js-file-line">      $target.<span class="pl-sc">data</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>bs.carousel<span class="pl-pds">&#39;</span></span>).to(slideIndex)</td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code js-file-line">    e.preventDefault()</td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-code js-file-line">  $(<span class="pl-s3">document</span>)</td>
      </tr>
      <tr>
        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-code js-file-line">    .on(<span class="pl-s1"><span class="pl-pds">&#39;</span>click.bs.carousel.data-api<span class="pl-pds">&#39;</span></span>, <span class="pl-s1"><span class="pl-pds">&#39;</span>[data-slide]<span class="pl-pds">&#39;</span></span>, clickHandler)</td>
      </tr>
      <tr>
        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-code js-file-line">    .on(<span class="pl-s1"><span class="pl-pds">&#39;</span>click.bs.carousel.data-api<span class="pl-pds">&#39;</span></span>, <span class="pl-s1"><span class="pl-pds">&#39;</span>[data-slide-to]<span class="pl-pds">&#39;</span></span>, clickHandler)</td>
      </tr>
      <tr>
        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-code js-file-line">  $(<span class="pl-s3">window</span>).on(<span class="pl-s1"><span class="pl-pds">&#39;</span>load<span class="pl-pds">&#39;</span></span>, <span class="pl-st">function</span> () {</td>
      </tr>
      <tr>
        <td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-code js-file-line">    $(<span class="pl-s1"><span class="pl-pds">&#39;</span>[data-ride=&quot;carousel&quot;]<span class="pl-pds">&#39;</span></span>).each(<span class="pl-st">function</span> () {</td>
      </tr>
      <tr>
        <td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-code js-file-line">      <span class="pl-s">var</span> $carousel <span class="pl-k">=</span> $(<span class="pl-v">this</span>)</td>
      </tr>
      <tr>
        <td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-code js-file-line">      <span class="pl-s3">Plugin</span>.<span class="pl-s3">call</span>($carousel, $carousel.<span class="pl-sc">data</span>())</td>
      </tr>
      <tr>
        <td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-code js-file-line">    })</td>
      </tr>
      <tr>
        <td id="L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-code js-file-line">  })</td>
      </tr>
      <tr>
        <td id="L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-code js-file-line">}(jQuery);</td>
      </tr>
</table>

  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="https://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2015 <span title="0.02866s from github-fe119-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents" placeholder=""></textarea>
      <div class="suggester-container">
        <div class="suggester fullscreen-suggester js-suggester js-navigation-container"></div>
      </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x flash-close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-fc447938e306b7b2c26a33cfee9dfda9052aeb1aa6ad84b72f1b35fd008efe9e.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-56c56f7fe2ed90ca50b9eefebccd56f3b9729a85d7ba17f0f9c9ebd02f20a7e3.js" type="text/javascript"></script>
      
      
  </body>
</html>

