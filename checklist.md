## Semantic tags

Here are some of the handiest semantic HTML5 elements, use them to improve your communication with search engines:

article - isolates a post from the rest of the code, makes it portable
section - isolates a group of posts within a blog or a group of headings within a post
aside - isolates supplementary content that is not part of the main content
header - isolates the top part of the document, article, section, may contain navigation
footer - isolates the bottom of the document, article, section, contains meta information
nav - isolates navigation menus, groups of navigational elements

## Robots
Address robots by name - Use robots if your instructions are for all crawlers, but use specific names to address individual crawlers. Google’s standard web crawler, for example, is called Googlebot. Addressing individual robots is usually done to ban malicious crawlers from the page while allowing well-intentioned crawlers to carry on.​
Match instructions to your goals - You’d normally want to use robots meta tags to keep search engines from indexing documents, internal search results, duplicate pages, staging areas, and whatever else you don’t want to show up in search.
HTML code
Below are some of the parameters most commonly used with robots meta tags. You can use any number of them in a single meta robots tag, separated by a comma:

noindex — page should not be indexed
nofollow — links on the page should not be followed
follow — links on the page should be followed, even if the page is not to be indexed
noimageindex — images on the page should not be indexed
noarchive — search results should not show a cached version of the page
unavailable_after — page should not be indexed beyond a certain date.

```<meta name="robots" content="index archive" />```