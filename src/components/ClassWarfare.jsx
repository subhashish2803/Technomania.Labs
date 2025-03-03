import React from 'react'

function ClassWarfare() {
  return (
    <div>
      <div className="relative row-start-1 grid grid-cols-subgrid lg:col-start-3 bg-white">
      <div hidden=""></div>
      <div className="isolate mx-auto grid w-full max-w-2xl grid-cols-1 gap-10 pt-10 md:pb-24 xl:max-w-5xl">
        <div className="px-4 sm:px-6">
          <p data-section="true" className="font-mono text-xs/6 font-medium tracking-widest text-gray-600 uppercase dark:text-gray-400">
            Installation
          </p>
          <h1 className="mt-2 text-3xl font-medium tracking-tight text-gray-950 dark:text-white">
            Get started with Tailwind CSS Latest Version 4.0
          </h1>
          <p data-description="true" className="mt-6 text-base/7 text-gray-700 dark:text-gray-300">
            Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.
          </p>
          <p className="mt-4 text-base/7 text-gray-700 dark:text-gray-300">
            It's fast, flexible, and reliable — with zero-runtime.
          </p>
          <div className="mt-10" data-content="true">
            <section className="relative mb-16">
              <div className="relative z-10">
                <h2 data-docsearch-ignore="true" className="mb-6 text-lg font-semibold tracking-tight text-gray-950 dark:text-white">
                  Installation
                </h2>
                <div className="-mx-4 mb-6 flex overflow-auto sm:-mx-6">
                  <div className="min-w-full flex-none px-4 sm:px-6">
                    <ul className="mb-px flex gap-x-6 border-b border-gray-950/5 whitespace-nowrap dark:border-white/10">
                      <li>
                        <h2>
                          <a className="-mb-px flex border-b pb-2 text-sm/7 font-medium border-current text-gray-950 dark:text-white" href="/docs/installation/using-vite">
                            Using Vite
                          </a>
                        </h2>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step 01 */}
              <div className="grid size-7 grid-cols-1 grid-rows-1 place-content-center border-1 border-gray-700/50 font-mono text-[10px]/7 font-medium text-gray-950 dark:border-white/50 dark:text-white">
                <div className="col-start-1 row-start-1 grid place-content-center">
                  <div className="h-7 w-5 bg-white dark:bg-gray-950"></div>
                </div>
                <div className="col-start-1 row-start-1 grid place-content-center tracking-widest">01</div>
              </div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="md:w-1/2">
                  <h4 className="mb-2 text-sm leading-6 font-semibold  text-slate-900 dark:text-slate-200">Install Tailwind CSS</h4>
                  <div className="prose">
                    <p className='font-sans'>Install <code className='font-sans'>tailwindcss</code> and <code className='font-sans'>@tailwindcss/vite</code> via npm.</p>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className="rounded-xl bg-gray-950">
                    <div className="rounded-xl p-1 text-sm scheme-dark">
                      <div className="px-3 pt-0.5 pb-1.5 text-xs/5 text-gray-400 dark:text-white/50">Terminal</div>
                      <div className="flex max-w-none overflow-auto rounded-lg bg-white/10! p-5 dark:bg-white/5!">
                        <pre className="shiki tailwindcss-theme" style={{ backgroundColor: 'transparent', color: 'var(--color-slate-50)' }} tabIndex="0">
                          <code>
                            <span className="line"><span style={{ color: '#f472b6' }}>npm</span><span style={{ color: '#38bdf8' }}> install</span><span style={{ color: '#38bdf8' }}> tailwindcss</span><span style={{ color: '#38bdf8' }}> @tailwindcss/vite</span></span>
                          </code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 02 */}
              <div className="grid size-7 grid-cols-1 grid-rows-1 place-content-center border-1 border-gray-700/50 font-mono text-[10px]/7 font-medium text-gray-950 dark:border-white/50 dark:text-white">
                <div className="col-start-1 row-start-1 grid place-content-center">
                  <div className="h-7 w-5 bg-white dark:bg-gray-950"></div>
                </div>
                <div className="col-start-1 row-start-1 grid place-content-center tracking-widest">02</div>
              </div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="md:w-1/2">
                  <h4 className="mb-2 text-sm leading-6 font-semibold font-sans text-slate-900 dark:text-slate-200">Create Tailwind Configuration File</h4>
                  <div className="prose">
                    <p className='font-sans'>Add the @tailwindcss/vite plugin to your Vite configuration</p>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className="rounded-xl bg-gray-950">
                    <div className="rounded-xl p-1 text-sm scheme-dark">
                      <div className="px-3 pt-0.5 pb-1.5 text-xs/5 text-gray-400 dark:text-white/50">Terminal</div>
                      <div className="flex max-w-none overflow-auto rounded-lg bg-white/10! p-5 dark:bg-white/5!">
                        <pre className="shiki tailwindcss-theme" style={{ backgroundColor: 'transparent', color: 'var(--color-slate-50)' }} tabIndex="0">
                          <code>
                            <span className="line"><span style={{ color: '#f472b6' }}>import </span> <span></span></span>
                          </code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 03 */}
              <div className="grid size-7 grid-cols-1 grid-rows-1 place-content-center border-1 border-gray-700/50 font-mono text-[10px]/7 font-medium text-gray-950 dark:border-white/50 dark:text-white">
                <div className="col-start-1 row-start-1 grid place-content-center">
                  <div className="h-7 w-5 bg-white dark:bg-gray-950"></div>
                </div>
                <div className="col-start-1 row-start-1 grid place-content-center tracking-widest">03</div>
              </div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="md:w-1/2">
                  <h4 className="mb-2 text-sm leading-6 font-semibold text-slate-900 dark:text-slate-200">Add Tailwind to Your CSS</h4>
                  <div className="prose">
                    <p>Add the following lines to your <code>index.css</code> (or other CSS entry file).</p>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className="rounded-xl bg-gray-950">
                    <div className="rounded-xl p-1 text-sm scheme-dark">
                      <div className="px-3 pt-0.5 pb-1.5 text-xs/5 text-gray-400 dark:text-white/50">CSS</div>
                      <div className="flex max-w-none overflow-auto rounded-lg bg-white/10! p-5 dark:bg-white/5!">
                        <pre className="shiki tailwindcss-theme" style={{ backgroundColor: 'transparent', color: 'var(--color-slate-50)' }} tabIndex="0">
                          <code>
                            <span className="line">@import <span style={{ color: '#f472b6' }}>"tailwindcss"</span></span>
                          </code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              
            </section>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ClassWarfare




