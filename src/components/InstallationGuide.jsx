import React from 'react';

const InstallationGuide = () => {
  return (
    <div className="relative row-start-1 grid grid-cols-subgrid lg:col-start-3 bg-black">
      <div hidden=""></div>
      <div className="isolate mx-auto grid w-full max-w-2xl grid-cols-1 gap-6 pt-6 md:gap-10 md:pt-10 md:pb-24 xl:max-w-5xl">
        <div className="px-4 sm:px-6">
          {/* Title Section */}
          <p data-section="true" className="font-mono text-xs/6 font-medium tracking-widest text-white uppercase">
            Installation
          </p>
          <h1 className="mt-2 text-2xl font-medium tracking-tight text-white sm:text-3xl">
            Get started with Tailwind CSS Latest Version 4.0
          </h1>
          <p data-description="true" className="mt-4 text-sm/6 text-gray-300 sm:text-base/7">
            Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.
          </p>
          <p className="mt-3 text-sm/6 text-gray-300 sm:text-base/7">
            It's fast, flexible, and reliable — with zero-runtime.
          </p>

          {/* Installation Steps */}
          <div className="mt-8" data-content="true">
            <section className="relative mb-12">
              <div className="relative z-10">
                <h2 data-docsearch-ignore="true" className="mb-4 text-lg font-semibold tracking-tight text-white sm:mb-6">
                  Installation
                </h2>
                <div className="-mx-4 mb-4 flex overflow-auto sm:-mx-6 sm:mb-6">
                  <div className="min-w-full flex-none px-4 sm:px-6">
                    <ul className="mb-px flex gap-x-6 border-b border-gray-950/5 whitespace-nowrap dark:border-white/10">
                      <li>
                        <h2>
                          <a className="-mb-px flex border-b pb-2 text-sm/7 font-medium border-current text-white" href="/docs/installation/using-vite">
                            Using Vite
                          </a>
                        </h2>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step 01 */}
              <div className="grid size-7 grid-cols-1 grid-rows-1 place-content-center border-1 border-gray-700/50 font-mono text-[10px]/7 font-medium text-gray-950 border-white/50">
                <div className="col-start-1 row-start-1 grid place-content-center">
                  <div className="h-7 w-5 bg-gray-950"></div>
                </div>
                <div className="col-start-1 row-start-1 grid place-content-center tracking-widest text-white">01</div>
              </div>
              <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="md:w-1/2">
                  <h4 className="mb-2 text-sm leading-6 font-semibold text-slate-200">Install Tailwind CSS</h4>
                  <div className="prose text-white">
                    <p className="font-sans">Install <code className="font-sans">tailwindcss</code> and <code className="font-sans">@tailwindcss/vite</code> via npm.</p>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className="relative">
                    <div className="absolute -inset-1.5 bg-gradient-to-r from-pink-700 to-purple-600 rounded-xl blur opacity-75"></div>
                    <div className="relative rounded-xl bg-gray-950">
                      <div className="rounded-xl p-1 text-sm scheme-dark relative">
                        <div className="px-3 pt-0.5 pb-1.5 text-xs/5 text-gray-400 /50">Terminal</div>
                        <div className="flex max-w-none overflow-auto rounded-lg bg-white/10! p-4 sm:p-5 dark:bg-white/5!">
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
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstallationGuide;