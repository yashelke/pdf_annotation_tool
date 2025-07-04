// export default function Features() {
//   const features = [
//     { title: 'Highlight Text', desc: 'Easily highlight important parts of your PDF.' },
//     { title: 'Add Comments', desc: 'Attach notes anywhere on your document.' },
//     { title: 'Draw Shapes', desc: 'Draw arrows, boxes, and more directly on the PDF.' },
//     { title: 'Download Annotations', desc: 'Export the annotated file instantly.' },
//   ]

//   return (
//     <section id="features" className="py-16 bg-white text-center px-4 sm:px-6 md:px-10">
 
//       <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">
//         Features
//       </h2>

     
//       <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
//         {features.map((feat, index) => (
//           <div
//             key={index}
//             className="p-6 bg-white border-[2px] border-black rounded-xl shadow-sm hover:bg-red-200 hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out"
//           >
//             <h3 className="text-xl font-semibold text-blue-700 mb-2">
//               {feat.title}
//             </h3>
//             <p className="text-gray-600 text-sm md:text-base">
//               {feat.desc}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }

export default function Features() {
  const features = [
    { title: 'Highlight Text', desc: 'Easily highlight important parts of your PDF.' },
    { title: 'Add Comments', desc: 'Attach notes anywhere on your document.' },
    { title: 'Draw Shapes', desc: 'Draw arrows, boxes, and more directly on the PDF.' },
    { title: 'Download Annotations', desc: 'Export the annotated file instantly.' },
  ]

  return (
    <section id="features" className="py-16 bg-white text-center px-4 sm:px-6 md:px-10">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">Features</h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feat, index) => (
          <div
            key={index}
            className="p-6 border-2 border-black rounded-xl bg-white shadow-sm transition-transform duration-300 ease-in-out hover:bg-red-200 hover:shadow-xl hover:scale-105 active:scale-95 focus:outline-none"
          >
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              {feat.title}
            </h3>
            <p className="text-black text-sm md:text-base">
              {feat.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
