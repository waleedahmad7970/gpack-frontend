const SpinnerLoader = () => {
    return (
        <div className="flex justify-center items-center py-4">
            <div className="h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
        </div>
    );
}

export default SpinnerLoader;