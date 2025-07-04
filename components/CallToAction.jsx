export default function CallToAction() {
  return (
    <section id="cta" className="bg-blue-100 py-20 text-center px-6 md:px-10">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">Start Annotating Now</h2>
      <p className="mb-6 text-gray-700 max-w-xl mx-auto text-sm md:text-base">
        Upload your PDF and begin marking it up in seconds.
      </p>
      <div className="flex justify-center items-center gap-4 flex-wrap">
        <input
          type="file"
          accept="application/pdf"
          className="border rounded px-3 py-2 bg-white shadow-sm"
          disabled
        />
       
        <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-xl shadow-md hover:bg-blue-700 hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 16 16">
    <path d="M.5 9.9a.5.5 0 0 0 .5.6h14a.5.5 0 0 0 .5-.6l-7-7a.5.5 0 0 0-.707 0l-7 7z"/>
  </svg>
  Upload PDF
</button>

      </div>
    </section>
  )
}
