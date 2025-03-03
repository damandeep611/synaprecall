
export default function Hero(){
  return(
    <section className="relative min-h-screen  py-12 sm:py-16 lg:pt-20 xl:pb-0">
      
        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-3xl mx-auto text-center">
                
                <h1 className="mt-5 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-pj">Collect, Classify, Research, All for You. Using AI</h1>
                <p className="max-w-lg mx-auto mt-6 text-base leading-7 text-gray-600 font-inter">BookMind is your intelligent bookmarking companion that collects, organizes, and researches web content. Save what matters, discover what's related, all powered by AI.</p>

                <div className="relative inline-flex mt-10 group">
                    
                    <a href="#" title="" className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" role="button">
                        Get Started
                    </a>
                </div>
            </div>
            <div>
              <img src="/landing/synapheroimg.png" alt="" className="rounded-lg shadow-2xl pt-8" />
            </div>
        </div>
    </section>


  )
}