import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function MarkdownRenderer({ content }) {
  return (
    <div className="prose prose-invert max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ node, ...props }) => (
            <h1 className="text-2xl font-bold text-white mb-4" {...props} />
          ),
          h2: ({ node, ...props }) => (
            <h2 className="text-xl font-bold text-white mb-3" {...props} />
          ),
          h3: ({ node, ...props }) => (
            <h3 className="text-lg font-bold text-white mb-2" {...props} />
          ),
          p: ({ node, ...props }) => (
            <p className="text-gray-300 mb-4" {...props} />
          ),
          ul: ({ node, ...props }) => (
            <ul
              className="list-disc list-inside text-gray-300 mb-4"
              {...props}
            />
          ),
          ol: ({ node, ...props }) => (
            <ol
              className="list-decimal list-inside text-gray-300 mb-4"
              {...props}
            />
          ),
          li: ({ node, ...props }) => (
            <li className="text-gray-300 mb-1" {...props} />
          ),
          table: ({ node, ...props }) => (
            <table
              className="border-collapse border border-gray-600 mb-4"
              {...props}
            />
          ),
          th: ({ node, ...props }) => (
            <th
              className="border border-gray-600 px-4 py-2 text-white"
              {...props}
            />
          ),
          td: ({ node, ...props }) => (
            <td
              className="border border-gray-600 px-4 py-2 text-gray-300"
              {...props}
            />
          ),
          img: ({ node, ...props }) => (
            <img className="max-w-full h-auto rounded-lg mb-4" {...props} />
          ),
          a: ({ node, ...props }) => (
            <a className="text-[#2f9edd] hover:text-[#2f9edd]/80" {...props} />
          ),
          code: ({ node, ...props }) => (
            <code
              className="bg-gray-800 px-2 py-1 rounded text-gray-300"
              {...props}
            />
          ),
          pre: ({ node, ...props }) => (
            <pre
              className="bg-gray-800 p-4 rounded-lg mb-4 overflow-x-auto"
              {...props}
            />
          ),
          blockquote: ({ node, ...props }) => (
            <blockquote
              className="border-l-4 border-[#2f9edd] pl-4 italic text-gray-300 mb-4"
              {...props}
            />
          ),
          hr: ({ node, ...props }) => (
            <hr className="border-gray-600 my-6" {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

export default MarkdownRenderer;
