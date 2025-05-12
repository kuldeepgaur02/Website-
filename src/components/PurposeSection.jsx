import React from 'react'

const PurposeSection = () => {
    const features = [
        {
          icon: "🟣", // Replace with your actual icon component or image
          title: "Built for impact",
          description: "We identify and nurture a truly diverse team of designers, developers and marketers"
        },
        {
          icon: "🔴", // Replace with your actual icon component or image
          title: "In sync with you",
          description: "We work the way you do by adapting to your workflows and rhythm we aim to blend in for a seamless experience."
        }
      ];
      
  return (
    <section className='w-full bg-gray-50 py-16 px-4 sm:px-6 lg:px-8' id='about'>
        <div className='max-w-6xl mx-auto'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 md:gap-12'>
                <div className='md:col-span-1 lg:col-span-1'>
                    <p className='text-sm text-purple-600 font-medium mb-2'>ACHIEVE MORE</p>
                    <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>
                        Purpose of the convoy is to keep your team moving forward
                    </h2>
                </div>
            
                <div className='col-span-2 grid grid-cols-1 md:grid-cols-2 justify-between gap-8'>
                    {features.map((feature, index) => (
                        <div key={index} className='flex gap-6'>
                            <div className='flex-shrink-0 w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center text-2xl'>
                                {feature.icon}
                            </div>
                            <div>
                                <h3 className='text-xl font-semibold text-gray-900 mb-2'>{feature.title}</h3>
                                <p className='text-gray-600'>{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default PurposeSection