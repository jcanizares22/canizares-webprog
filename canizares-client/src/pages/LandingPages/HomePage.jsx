import Button from "../../Components/Button";

const HomePage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-900">
              Signature kitchen
            </p>
            <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
              Caul&apos;s serves bold burgers and wood-fired pizza with rustic craft.
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
              From flame-grilled patties to hand-stretched pies baked in a live fire oven,
              every dish is layered with smoky depth, house-made sauce, and fresh local toppings.
            </p>
            <div className="mt-6">
              <Button to="/about" variant="primary">
                Discover Caul&apos;s
              </Button>
            </div>
          </div>

          <div className="rounded-3xl border-2 border-dashed border-zinc-300 bg-zinc-100 p-6">
            <div className="flex min-h-[260px] items-center justify-center overflow-hidden rounded-[1.25rem] bg-zinc-200">
              <img
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80"
                alt="Gourmet burger from Caul's"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-900">
            Kitchen highlights
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
            The numbers behind our flavor story
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">12</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Signature burgers
            </p>
          </div>
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">08</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Pizza flavors
            </p>
          </div>
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">24</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Farm-fresh toppings
            </p>
          </div>
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">04</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              House sauces
            </p>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-900">
            Flavor features
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
            Our kitchen specialties
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <div className="overflow-hidden rounded-[1.25rem]">
              <img
                src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=80"
                alt="Craft burger with loaded toppings"
                className="h-48 w-full object-cover"
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-zinc-900">
              Craft burgers, bold flavor
            </h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Hand-pressed patties, toasted brioche buns, and smoky house sauce create the ultimate burger experience.
            </p>
            <Button className="mt-4" variant="primary">
              View More
            </Button>
          </article>

          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <div className="overflow-hidden rounded-[1.25rem]">
              <img
                src="https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&w=900&q=80"
                alt="Wood-fired pizza with fresh toppings"
                className="h-48 w-full object-cover"
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-zinc-900">
              Wood-fired pizza classics
            </h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Thin crusts, blistered edges, and house-made sauces baked to order in our signature fire oven.
            </p>
            <Button className="mt-4" variant="primary">
              View More
            </Button>
          </article>

          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <div className="overflow-hidden rounded-[1.25rem]">
              <img
                src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=80"
                alt="Gourmet side dish at Caul's"
                className="h-48 w-full object-cover"
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-zinc-900">
              Elevated sides and sharers
            </h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Crisp fries, loaded boards, and seasonal small plates built to share with friends.
            </p>
            <Button className="mt-4" variant="primary">
              View More
            </Button>
          </article>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
