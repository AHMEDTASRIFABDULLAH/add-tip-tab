import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import { createLowlight } from 'lowlight'
import javascript from 'highlight.js/lib/languages/javascript'
import 'highlight.js/styles/github.css'


const lowlight = createLowlight()
lowlight.register('javascript', javascript)

const TipTapEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        codeBlock: false,
      }),
      CodeBlockLowlight.configure({
        lowlight,
      }),
    ],
    content: `
         <h2>Editable Blog</h2>
      <pre><code class="language-js">
 function hello() {
  console.log("Hello World!");
 }
      </code></pre>
    `,
  })

  return (
    <div className='p-4 bg-red-50'>
      <EditorContent editor={editor} />
    </div>
  )
}

export default TipTapEditor
