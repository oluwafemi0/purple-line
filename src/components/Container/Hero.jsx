import React,{useState,useEffect} from 'react'

const Hero = () => {


  return (
    <>

    <div className='w-full bg-white'>
    <section class="px-4 py-24 mx-auto bg-white max-w-7xl">
  <div class="grid items-center w-full grid-cols-1 gap-0 mx-auto lg:grid-cols-11 lg:gap-24 xl:w-11/12">
    <div class="col-auto text-center md:col-span-7 lg:text-left">
      <h1 class="mb-4 text-3xl font-bold leading-tight text-purple-900 md:text-4xl md:leading-none tracking-none md:tracking-tight">Ready to start your journey?</h1>
      <p class="mb-10 text-lg font-light text-gray-500 md:text-xl md:tracking-relaxed md:mb-4">
        Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.
        Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.
        Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.
        Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.
        Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.
        Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.
      </p>
    </div>
    <div class="col-auto md:col-span-4">
      <form class="mb-6 border-0 rounded-lg shadow-xl card">
        
        <div class="px-6 py-4 space-y-4 border-b border-gray-200 card-body">
         
          <label class="flex">
            <span class="sr-only">Email Address</span>
            <input class="mt-0 form-input bg-transparent" type="email" placeholder="Email Address" required="true" />
          </label>
          <label class="flex">
            <span class="sr-only">Phone</span>
            <input class="mt-0 form-input bg-transparent" type="email" placeholder="Phone Number" required="true" />
          </label>
          
          <label class="flex">
            <span class="sr-only">Password</span>
            <input class="mt-0 form-input bg-transparent" type="password" placeholder="Password" required="true" />
          </label>
          <button class="w-full py-2 btn btn-primary" type="submit">Sign up</button>
        </div>
        
        <div class="px-6 py-4 space-y-4 border-b border-gray-200 card-body">
         
          <label class="flex">
            <span class="sr-only">Email Address</span>
            <input class="mt-0 form-input bg-transparent" type="email" placeholder="Email Address" required="true" />
          </label>
          <label class="flex">
            <span class="sr-only">Password</span>
            <input class="mt-0 form-input bg-transparent" type="password" placeholder="Password" required="true" />
          </label>
          <button class="w-full py-2 btn btn-primary" type="submit">Sign In</button>
        </div>
        <div class="px-6 py-4 card-body">
          
          <button class="w-full py-2 btn btn-icon btn-google" >
            <svg
              class="mr-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="transparent"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M20.283,10.356h-8.327v3.451h4.792c-0.446,2.193-2.313,3.453-4.792,3.453c-2.923,0-5.279-2.356-5.279-5.28	c0-2.923,2.356-5.279,5.279-5.279c1.259,0,2.397,0.447,3.29,1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233	c-4.954,0-8.934,3.979-8.934,8.934c0,4.955,3.979,8.934,8.934,8.934c4.467,0,8.529-3.249,8.529-8.934	C20.485,11.453,20.404,10.884,20.283,10.356z"
              />
            </svg>
            Sign In With Google
          </button>
          
        </div>
      </form>
      <p class="text-xs text-center text-gray-600">By signing up you agree to our <a href="#" class="text-primary">Terms of Service</a></p>
    </div>
  </div>
</section>
<div className='w-full bg-purple-900'></div>
<section>
  <div class="mx-auto max-w-screen-2xl px-4  sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div class="bg-purple-900 p-8 md:p-12 lg:px-16 lg:py-24">
        <div class="mx-auto max-w-xl text-center">
          <h2 class="text-2xl font-bold text-white md:text-3xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit
          </h2>

          <p class="hidden text-white/90 sm:mt-4 sm:block">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas
            tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim
            et fermentum, augue. Aliquet amet volutpat quisque ut interdum
            tincidunt duis.
          </p>

          <div class="mt-4 md:mt-8">
            <a
              href="#"
              class="inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-purple-500 transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>

      <div class="grid  grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
        <img
          alt="Student"
          src="https://images.unsplash.com/photo-1621274790572-7c32596bc67f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80"
          class="h-40 w-full object-cover sm:h-56 md:h-full"
        />

        <img
          alt="Student"
          src="https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          class="h-40 w-full object-cover sm:h-56 md:h-full"
        />
      </div>
    </div>
  </div>
</section>
</div>

    </>
  )
}

export default Hero