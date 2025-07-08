import { useState } from "react";
import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  List,
  ListOrdered,
  Link,
  Image,
  Smile,
  Type,
  Palette,
  MoreHorizontal,
} from "lucide-react";
import { cn } from "@/lib/utils";

const RichTextEditor = () => {
  const [content, setContent] = useState(`Discover the riches of our editor ⭐

Read on to better understand the functionalities you can test with this demo.

Did you know that...

• CKEditor is customizable. You can fine-tune the set of enabled plugins, available toolbar buttons, and the behavior of features.
• The editor supports @mentions. Start typing @to see available suggestions.
• You can also insert dynamic placeholders within the content using merge fields! Start typing {{ or use the ⚫ button to insert them. Use the 🔺 button to preview values. (Merge Field Example)
• You can paste content from Word or Google Docs, retaining the original document structure and formatting.
• Thanks to Import from Word 📄, you can convert a DOCX document into HTML and edit it in CKEditor 5.`);

  const toolbarButtons = [
    { icon: Type, label: "Font" },
    { icon: Palette, label: "Text Color" },
    { icon: Bold, label: "Bold" },
    { icon: Italic, label: "Italic" },
    { icon: Underline, label: "Underline" },
    { icon: AlignLeft, label: "Align Left" },
    { icon: AlignCenter, label: "Align Center" },
    { icon: AlignRight, label: "Align Right" },
    { icon: List, label: "Bullet List" },
    { icon: ListOrdered, label: "Numbered List" },
    { icon: Link, label: "Link" },
    { icon: Image, label: "Image" },
    { icon: Smile, label: "Emoji" },
    { icon: MoreHorizontal, label: "More" },
  ];

  return (
    <div className="w-full border border-slate-300 rounded-lg bg-white">
      {/* Toolbar */}
      <div className="border-b border-slate-200 p-2 flex items-center gap-1 flex-wrap overflow-x-auto">
        {/* Paragraph dropdown */}
        <select className="px-2 py-1 border border-slate-200 rounded text-sm min-w-0 flex-shrink-0">
          <option>Paragraph</option>
          <option>Heading 1</option>
          <option>Heading 2</option>
        </select>

        {/* Styles dropdown */}
        <select className="px-2 py-1 border border-slate-200 rounded text-sm ml-2 min-w-0 flex-shrink-0">
          <option>Styles</option>
          <option>Bold</option>
          <option>Italic</option>
        </select>

        {/* Divider */}
        <div className="w-px h-6 bg-slate-200 mx-2 flex-shrink-0" />

        {/* Toolbar buttons */}
        <div className="flex items-center gap-1 flex-shrink-0">
          {toolbarButtons.map((button, index) => (
            <button
              key={index}
              className="p-1.5 hover:bg-slate-100 rounded transition-colors flex-shrink-0"
              title={button.label}
            >
              <button.icon size={16} className="text-slate-600" />
            </button>
          ))}
        </div>
      </div>

      {/* Editor Content */}
      <div className="p-4 min-h-[200px] lg:min-h-[300px]">
        <div className="prose max-w-none text-sm lg:text-base">
          <h2 className="text-base lg:text-lg font-semibold text-slate-800 mb-2">
            Discover the riches of our editor ⭐
          </h2>
          <p className="text-slate-700 mb-4">
            Read on to better understand the functionalities you can test with
            this demo.
          </p>
          <p className="text-slate-700 mb-2">
            <strong>Did you know that...</strong>
          </p>
          <ul className="list-disc list-inside text-slate-700 space-y-1">
            <li>
              <strong>CKEditor is customizable.</strong> You can fine-tune the
              set of enabled plugins, available toolbar buttons, and the
              behavior of features.
            </li>
            <li>
              The editor supports <strong>@mentions</strong>. Start typing @to
              see available suggestions.
            </li>
            <li>
              You can also insert dynamic placeholders within the content using{" "}
              <strong>merge fields!</strong> Start typing &#123;&#123; or use
              the ⚫ button to insert them. Use the 🔺 button to preview values.{" "}
              <span className="bg-blue-100 px-1 rounded">
                &#123;&#123;Merge Field Example&#125;&#125;
              </span>
            </li>
            <li>
              You can <strong>paste content</strong> from Word or Google Docs,
              retaining the original document structure and formatting.
            </li>
            <li>
              Thanks to Import from Word 📄, you can convert a DOCX document
              into HTML and edit it in CKEditor 5.
            </li>
          </ul>
        </div>
      </div>

      {/* Status Bar */}
      <div className="border-t border-slate-200 px-4 py-2 flex justify-between items-center text-sm text-slate-500">
        <span>Words: 115 Characters: 706</span>
        <button className="bg-blue-900 text-white px-4 py-1.5 rounded-full text-sm font-open-sans hover:bg-blue-800 transition-colors">
          Send
        </button>
      </div>
    </div>
  );
};

export default RichTextEditor;
