import Button from "../Components/Button";

const NotFoundPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md">
        <div className="mx-auto h-32 w-full rounded-3xl border-2 border-zinc-900 bg-gradient-to-r from-amber-900/20 to-zinc-100 p-6">
          <img
            src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80"
            alt="Caul's Kitchen"
            className="h-full w-full rounded-2xl object-cover"
          />
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <h1 className="text-6xl font-bold tracking-tight text-zinc-900 sm:text-7xl">
          404
        </h1>
        
        <p className="mt-4 text-xl font-semibold text-zinc-900">
          Page Not Found
        </p>
        
        <p className="mt-2 text-sm text-zinc-500 max-w-md">
          The page you&apos;re looking for doesn&apos;t exist. Get back to where the good food is.
        </p>
        
        <div className="mt-8">
          <Button to="/" size="lg" variant="primary">
            Return to Caul&apos;s
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
