const links = [


    { name: 'Exterior Detailing', href: '#' },
    { name: 'Interior Detailing', href: '#' },
    { name: 'Ceramic Coating', href: '#' },
  ]
  const stats = [
  
  
    { name: 'Customer Satisfaction', value: '100%' },
    { name: 'Vehicles Served', value: '100+' },
    { name: 'Locations Served', value: '12' },
    { name: 'Attention to Detail', value: 'Unlimited' },
  ]
  export const Example = () => {
    return (
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 h-250">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent opacity-100 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 z-10"></div>

        {/* Image */}
        <img
          alt=""
          src="/p1.jpg"
          className="absolute inset-0 size-full object-cover object-right md:object-center brightness-40 "
        />
  
        {/* Content */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 pt-30">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">Driven by Details</h2>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
            Our car detailing service enhances every detail, from deep interior cleaning to a flawless exterior shine. Whether it's a quick wash or a full detailing, we ensure your car looks like new with meticulous care.            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <a key={link.name} href={link.href}>
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse gap-1">
                  <dt className="text-base/7 text-gray-300">{stat.name}</dt>
                  <dd className="text-4xl font-semibold tracking-tight text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    )
  }
  
