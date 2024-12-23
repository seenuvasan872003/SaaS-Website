import 'react'
const testimonialData = [
  {
    id: 1,
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    author: "Alex Rivera",
    handle: "@jamietechguru00",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/5c333db1759d0bbbddba13bbf84ea686beda0a55f3af4cf77b9ac3daf47813d7?placeholderIfAbsent=true&apiKey=7055c60c58df44cabe2db42b92d76fcb"
  },
  {
    id: 2,
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    author: "Casey Jordan",
    handle: "@caseyj",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/c8a37a14eb64f9a19f62b373b8f0e6b8c1c6ff008f8d7cf710aa9d20b198abb3?placeholderIfAbsent=true&apiKey=7055c60c58df44cabe2db42b92d76fcb"
  },
  {
    id: 3,
    text: "Our team's productivity has skyrocketed since we started using this tool.",
    author: "Josh Smith",
    handle: "@jjsmith",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/72166076289654e58d20642e1d52d21bf102fa0cba6a2647ded2b8f6a9f63be7?placeholderIfAbsent=true&apiKey=7055c60c58df44cabe2db42b92d76fcb"
  },
  {
    id: 4,
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    author: "Taylor Kim",
    handle: "@taylorkimm",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/526f0a2fd5255079381fd2a09b26e273f02571a2e3426d694667902040346519?placeholderIfAbsent=true&apiKey=7055c60c58df44cabe2db42b92d76fcb"
  },
  {
    id: 5,
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    author: "Alex Rivera",
    handle: "@jamietechguru00",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/5c333db1759d0bbbddba13bbf84ea686beda0a55f3af4cf77b9ac3daf47813d7?placeholderIfAbsent=true&apiKey=7055c60c58df44cabe2db42b92d76fcb"
  },
  {
    id: 6,
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    author: "Casey Jordan",
    handle: "@caseyj",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/c8a37a14eb64f9a19f62b373b8f0e6b8c1c6ff008f8d7cf710aa9d20b198abb3?placeholderIfAbsent=true&apiKey=7055c60c58df44cabe2db42b92d76fcb"
  },
  {
    id: 7,
    text: "Our team's productivity has skyrocketed since we started using this tool.",
    author: "Josh Smith",
    handle: "@jjsmith",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/72166076289654e58d20642e1d52d21bf102fa0cba6a2647ded2b8f6a9f63be7?placeholderIfAbsent=true&apiKey=7055c60c58df44cabe2db42b92d76fcb"
  },
  {
    id: 8,
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    author: "Taylor Kim",
    handle: "@taylorkimm",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/526f0a2fd5255079381fd2a09b26e273f02571a2e3426d694667902040346519?placeholderIfAbsent=true&apiKey=7055c60c58df44cabe2db42b92d76fcb"
  },
  {
    id: 9,
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    author: "Casey Jordan",
    handle: "@caseyj",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/c8a37a14eb64f9a19f62b373b8f0e6b8c1c6ff008f8d7cf710aa9d20b198abb3?placeholderIfAbsent=true&apiKey=7055c60c58df44cabe2db42b92d76fcb"
  },
];

const UsersSay = () => {
  return (
    <>
      <section >
        <div className='font-bold text-3xl md:text-4xl text-center mb-3'>
          <h1>What our users say</h1>
        </div>
        <div>
          <div className="flex flex-col items-center px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
              {testimonialData.map(({ id, text, author, handle, image }) => (
              <div key={id} className="p-4 bg-white border border-gray-200 rounded-lg shadow-lg flex flex-col">
                <p className="text-gray-700 mb-4">{text}</p>
                <div className="flex items-center mt-auto">
                  <img src={image} alt={`Profile of ${author}`} className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h3 className="font-medium">{author}</h3>
                    <p className="text-gray-500 text-sm">{handle}</p>
                  </div>
                </div>
              </div>
              ))}
            </div>
          </div>
            
        </div>
      </section>
    </>
  )
}

export default UsersSay