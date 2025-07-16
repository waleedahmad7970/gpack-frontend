export default function FullPageLoader() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
            <div className="h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
        </div>
  );
}