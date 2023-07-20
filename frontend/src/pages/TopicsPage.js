import React from 'react';


function TopicsPage() {
    return(
        <section>
            <nav class="homenav">
                <a href="#webservers">Web Servers</a>
                <a href="#frontend">Frontend Design</a>
                <a href="#images">Optimizing Images</a>
                <a href="#stylesheets">Cascading stylesheets</a>
                <a href="#forms">Forms</a>
                <a href="#node">Node</a>
                <a href="#javaScript">JavaScript</a>
                <a href="#DOMchanges">Changing the DOM</a>
            </nav>
            <h2>Web Dev Concepts</h2>
            <article id="webservers">
                <h3>Web Servers</h3>
                {/* 1.Explain what index means as it relates to websites and servers. */}
                <p> 
                    In relation to websites and servers, <strong>index</strong> refers to a particular resource in a given <strong>domain or server</strong>. Index usually refers to web pages and files on a domain, much like this web page. The file name index.html generally serves as a domain's homepage of a website on an Apache web server. On occasion, the file name default.html is used instead, such as on Microsoft's .NET platform.  
                </p>


                {/* 2.Explain what you see in the browser's Web Dev/Inspector tools. What is different about the file's details on the web server versus the local computer? */}
                <p> 
                    The <strong>Web Dev/Inspector tools</strong> allows programmers to view important information such as <strong>Request and Response</strong> contents. From the Chrome inspect tool, we can see the <strong>request URL, request method, status code and reason phrase, and both the response and request headers</strong>. With a webpage that supports server-side scripting, we will be able to see other files that are being executed, such as .js and .css files. On the engineering web server, the index.html file is replaced by the a1-rodrjuan/ folder. There are also additional files present, such as executor.js and favicon.ico. It should also be noted that the time it takes to receive a file from the local computer is significantly faster than it is from the web server. 
                </p>


                {/* 3.Explain why the favicon.ico file has a status 200, but the main.css and main.js files do not. */}
                <p> 
                    In terms of this webpage, the favicon.ico file returns a status of 200, and 
                    by extension an OK reason phrase, because the engineering servers provide 
                    the file. In contrast, both the main.css and main.js returns a client-error 
                    status of 404. This means that the server was not able to find the requested 
                    files, either because they were not provided or they do not exist.
                </p>


                {/* 4.Explain the parts of the URL to your web file. What are the scheme, subdomain, host domain, and resources? */}
                <p> 
                    The URL for this web file is https://web.engr.oregonstate.edu/~rodrjuan/M1/a1-rodrjuan. The <strong>scheme</strong> is https, and it is used to identify the protocol that will be used to request the resource. The <strong>subdomain</strong> is web.engr and the <strong>domain name</strong> is oregonstate.edu. This <strong>specific resource</strong> is mapped by the URL to /~rodrjuan/M1/a1-rodrjuan. 

                </p>
            </article>
            <article id="frontend">
                <h3>Frontend Design</h3>
                {/* The concept of frontend design */}
                <p>
                    <strong>Frontend design</strong> focuses on the development of a website with the goal of producing the best experience for users. It accomplishes this by concentrating on visual design, the graphical user-interface(GUI), and the interactive experience of a website. For visual design specifically, the web designer should focus on creating consistency in color scheme, font and typography, photography, icon and illustration scheme, and an intuitive navigation system.
                </p>
                {/* The five "E"s of usability */}
                <h3>The five "E"s of usability</h3>
                <dl>
                    <dt>Effective</dt>
                    <dd>
                        The website is effective in helping users achieve their goals. The user should be able to obtain accurate results when using the website.
                    </dd>
                    <dt>Efficient</dt>
                    <dd>
                        The user is able to complete their tasks on the website with the least number of steps. Users should be able to complete their tasks as quickly as possible. 
                    </dd>
                    <dt>Easy to Navigate</dt>
                    <dd>
                        The website is beginner-friendly and intuitive. The user should be able to navigate the website with minimal explanation. 
                    </dd>
                    <dt>Error-Free</dt>
                    <dd>
                        The website should be accessible and available without issues. The user should not encounter any issues or roadblocks when they attempt to accomplish a specific task. This principle can be best accomplished through usability testing.
                    </dd>
                    <dt>Enjoyable/engaging</dt>
                    <dd>
                        The user experience should be pleasant. The website content and design should fit the needs of the intended audience. The user should leave wanting to use the website again. 
                    </dd>
                </dl>
                {/* The purpose of page layout tags */}
                <p>
                    <strong>Page layout tags</strong> are commonly used to break up the flow of content. On a webpage, the use of a page layout tag would be conveyed by the use of a <strong>newline</strong> before and after the element. Before HTML 5, the <strong>div</strong> tag was used extensively to divide page content, however the introduction of named layout tags removed the need to rely on the div tag, reserving it for dynamic content instead. These tags appear very similar, however differentiating blocks help machines (such as search engine robots) match certain components with their corresponding areas on the webpage. The most common way to distinguish tags from one another is to change their style using CSS. Each layout tag has a different purpose on a webpage as well. The <strong>nav</strong> tag is used to take users from the current page to other pages. A <strong>header</strong> tag should hold the website name/publisher/marketing slogan, while a <strong>footer</strong> should hold legal and contact information, and should contain the web developer's copyright statement. A <strong>main</strong> block should be populated with a majority of the content, such as <strong>sections</strong>, which can be further divided into <strong>articles</strong>. 
                </p>
                {/* How anchors link to content and from page to page. Clarification: What is the conceptual difference between text anchors and navigation? */}
                <p>
                    The <strong>anchor</strong> element is used to create a link from the current webpage to an outside resource. The anchor element can also be used to connect to a specific location within the current webpage, using the <strong>ID</strong> attribute as a link. Anchors do this by specifying the URL where the link will take the user, done so by using the <strong>href</strong> attribute. An anchor differs from the nav block, as a nav block is used to group anchor elements based on commonalities, such as page-to-page, section-to-section, and article-to-article grouping.
                </p>
            </article>
            <article id="images">
                <h3>Optimizing Images</h3>
                {/* What are the 6 major specifications of images for the web? And why? */}
                <p>
                    Optimized images meet the following specifications: <strong>A descriptive file name, a small file size, exact dimensions, correct file format, reduced resolution, and correct color mode.</strong> A descriptive file name will improve search engine optimization so bots can properly categorize the image with related images. A small file size and exact dimensions allows for fast load times so users can access information as quickly as possible. A correct file format allows for the best image quality. Reducing resolution will diminish load times, however providing higher resolution images to account for higher resolution monitors is becoming a standard. Finally, correct color mode helps maintain image quality.
                </p>
                {/* Which file formats are most appropriate for photos and for line art? And why? */}
                <p>
                    The most appropriate formats for images are JPG, PNG, SVG, WebP, and GIF. Images on the web come from a variety of different places; screenshots, line art, photographs, animations, videos, etc. Different file formats are used to best appropriate the type of image used. Photos are typically formatted as JPG and WebP files while line arts are typically GIF and PNG files. Animated images are typically in SVG format. 
                </p>
            </article>
            <article id="stylesheets">
                <h3>Cascading stylesheets</h3>
                {/* What are the main reasons to incorporate stylesheets in websites and apps? */}
                <p>
                    While HTML gives webpages basic structure and organized content, it lacks in key aspects of proper web development principles, such as usability and readability. <strong>Cascading Style Sheets (CSS)</strong> allow web developers to redefine the structure of HTML to comply with these standards.
                </p>
                {/* What are the 5 ways to incorporate styles? And why? */}
                <p>
                    There are two main ways to incorporate styles in a file, externally and internally. External incorporation involves linking an external .css file in the global head of the website using the <strong>link</strong> tag. Similarly, styles can be incorporated into other .css files using <strong>@import</strong>. Internal incorporation can be achieved in four ways: <strong>Embedded, Inline, with JavaScript Template Literals, and in Regular JavaScript</strong>. Although internal incorporation can be used, the more efficient and preferred method is to incorporate styles externally. This is because having all styling changes in one location allows for a consistent and easily transferrable style on all pages of a website.
                </p>
            </article>
            <article id="forms">
                <h3>Form usability, elements and attributes, best practices, and accessibility</h3>
                <p>

                </p>
            </article>
            <article id="express">
                <h3>Node, npm, and Express</h3>
                <p>

                </p>
            </article>
            <article id="javaScript">
                <h3>JavaScript</h3>
                <p>
                    In JavaScript, there are two general classifications of data types: <strong>primitive and non-primitive.</strong> Of the primitive data types, there are <strong>numbers, boolean values, strings, symbols, and two special values: null and undefined.</strong> There is only one non-primitive data type: the <strong>object</strong> type.
                </p>
                <p>
                    All JavaScript objects are sets of <strong>name-value</strong> pairs, called <strong>properties.</strong> We can perform various operations on objects, such as <strong>create, read, update, and delete (CRUD)</strong> properties. Objects in JavaScript are used similarly to objects in other programming languages. Likewise, JavaScript <strong>arrays</strong> are simply lists of objects whose property names are the strings '0', '1', '2', ... etc. Arrays share much of the same behavior as objects, with the addition of random-access and methods such as push() and pop(). A <strong>JavaScript Object Notation, or JSON,</strong> is a formatting style that represents data in the format of a JavaScript object. JSON's are programming language independent, and are widely used to transfer data between programs, even if the programs are written in different languages.
                </p>
                <p>
                    <strong>Conditionals and Loops</strong> are used for branching and looping through code statements, much like other programming languages. JavaScript supports <strong>automatic type conversion</strong>, which can lead to some unwanted behavior. Ideally, conditional statements should explicitly produce a boolean value and avoid automatic type conversion. This is best achieved with the use of the <strong>strict equality operators</strong> === and !==.
                </p>
                <p>
                    JavaScript supports <strong>Object-Oriented Programming, or OOP,</strong> which allows programmers to declare <strong>classes</strong> and create objects from those classes. Each class of objects share properties and behaviors, but each instance can have their own identity and state. JavaScript also supports <strong>Functional Programming</strong>, which allows functions to pass other functions as arguments, return other functions, and assign functions to variables. There are other concepts allowed as well, such as <strong>anonymous functions</strong>, which allow the programmer to generalize a <strong>high-order function</strong> and pass a specific function later. There is also the concept of <strong>closures</strong>, which <strong>capture</strong> the values of <strong>free variables</strong> at execution without passing the variable. In other words, closures have access outside the function's scope from within the function.
                </p>
            </article>
            <article id="DOMchanges">
                <h3>Changing the DOM</h3>
                {/* Why do developers update the DOM of a page using JavaScript and Express? */}
                <p>
                    The <strong>Document Object Model</strong>, or <strong>DOM</strong>, is a visual and interactive representation of a web page's structure. The DOM structure is often represented as a tree with many branches composed of nodes. These nodes on the tree correspond to HTML elements, text, and attributes. Using this model, web developers can manipulate web pages using a scripting language, such as JavaScript.
                </p>
                <p>
                    While manipulating the DOM tree is possible on any scripting language, JavaScript was written specifically to script web pages. As such, it has been the industry standard. <strong>Express</strong>, on the other hand, serves as the underlying library for many popular Node web frameworks. Also written in JavaScript, Express serves as the 'middleware' within the request handling pipeline, with many options for handling requests, generating responses, and setting web application settings.
                </p>
            </article>
        </section>
    )
}

export default TopicsPage;