import Button from "../../Components/Button";

const AboutPage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="rounded-3xl border-2 border-dashed border-zinc-300 bg-zinc-100 p-6">
            <div className="flex min-h-72 items-center justify-center overflow-hidden rounded-[1.25rem] bg-zinc-200">
              <img
                src="https://images.unsplash.com/photo-1737012199412-ccf6a9270a5b?auto=format&fit=crop&w=900&q=80"
                alt="Caul's restaurant interior and pizza oven"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-900">
              About Caul&apos;s
            </p>
            <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
              A neighborhood kitchen where craft burgers meet wood-fired pizza.
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
              At Caul&apos;s, we combine fresh local ingredients, scratch-made sauces, and open flame cooking
              to deliver crave-worthy plates that feel bold, honest, and made with heart.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/" variant="primary">
                Back Home
              </Button>
              <Button to="/articles">Open Articles</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-900">
            Restaurant overview
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
            What makes Caul&apos;s unforgettable
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">05</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Years crafting flavor
            </p>
          </div>

          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">16</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Signature recipes
            </p>
          </div>

          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">09</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Local awards
            </p>
          </div>

          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">03</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Flavor families
            </p>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-900">
              Behind the kitchen
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
              A story of smoke, seasoning, and hospitality
            </h2>
            <div className="mt-6 space-y-4">
              <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                <h3 className="text-lg font-semibold text-zinc-900">
                  Fresh sourcing
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  We work with local farms and purveyors to bring true freshness to every burger, pizza, and side.
                </p>
              </article>

              <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                <h3 className="text-lg font-semibold text-zinc-900">
                  Fire-driven cooking
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  Our wood-fired oven and char-grill deliver deep caramelization, smoky crunch, and memorable texture.
                </p>
              </article>

              <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                <h3 className="text-lg font-semibold text-zinc-900">
                  Warm hospitality
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  Every visit is designed to feel welcoming, casual, and perfectly paced for friends and family.
                </p>
              </article>
            </div>
          </div>

          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-900">
              Visual inspiration
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="aspect-square overflow-hidden rounded-[1.25rem]">
                <img
                  src="https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?auto=format&fit=crop&w=900&q=80"
                  alt="Chefs preparing burgers"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-[1.25rem]">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80"
                  alt="Wood-fired pizza up close"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-[1.25rem]">
                <img
                  src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=80"
                  alt="Chef plating signature dishes"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-[1.25rem]">
                <img
                  src="https://images.unsplash.com/photo-1737012199412-ccf6a9270a5b?auto=format&fit=crop&w=900&q=80"
                  alt="Table with food dishes"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <Button className="mt-5" variant="primary">
              View Our Menu
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
