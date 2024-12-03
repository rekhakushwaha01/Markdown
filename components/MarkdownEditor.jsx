import React, { useState, useEffect } from "react";
import { marked } from "marked";
import AOS from "aos";
import "aos/dist/aos.css";

function MarkdownEditor() {
    const [markdown, setMarkdown] = useState("");

    useEffect(() => {
        AOS.init(); 
        AOS.refresh(); 
    }, []);

    return (
        <div>
       
            <header data-aos="fade-down">
                <nav>
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#services">Services</a>
                    <a href="#contact">Contact</a>
                    <h1>Markdown-Editor</h1>
                </nav>
            </header>

     
            <div className="main-content">
                
                <textarea
                    className="textarea-container"
                    value={markdown}
                    onChange={(e) => setMarkdown(e.target.value)}
                    placeholder="Write your Markdown here..."
                    data-aos="fade-right" 
                ></textarea>

                {/* HTML Preview */}
                <div
                    className="preview-container"
                    dangerouslySetInnerHTML={{ __html: marked(markdown) }}
                    data-aos="fade-left"  
                ></div>
            </div>

           
            <div className="examples-container" data-aos="zoom-in">
                <h3>Markdown Examples</h3>
                <pre>
                    {`# Header
**bold**
*italic*
[link](https://example.com)
\`\`\`
Code block
\`\`\`
- List item`}
                </pre>
            </div>
        </div>
    );
}

export default MarkdownEditor;
