export default function UnauthorizedPage() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="p-8 bg-white rounded shadow">
                <h1 className="text-2xl font-bold mb-4">403 – Unauthorized</h1>
                <p>You don’t have permission to view this page.</p>
                <a href="/" className="mt-4 inline-block text-primary">
                    ← Go Home
                </a>
            </div>
        </div>
    );
}
