import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";

const DashboardPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <SignedIn>
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Welcome to Dashboard</h1>
                    <p>This is a protected page</p>
                </div>
            </SignedIn>
            <SignedOut>
                <div className="text-center space-y-4">
                    <h1 className="text-2xl font-bold">Please Sign In</h1>
                    <div className="space-x-4">
                        <SignInButton mode="modal">
                            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                                Sign In
                            </button>
                        </SignInButton>
                        <SignUpButton mode="modal">
                            <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                                Sign Up
                            </button>
                        </SignUpButton>
                    </div>
                </div>
            </SignedOut>
        </div>
    );
};

export default DashboardPage;