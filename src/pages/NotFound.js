import Navigation from "../components/Navigation"

export default function NotFound() {
    return (
        <>
            <Navigation />
            <div className="flex items-center justify-center mt-4 text-blue-100 text-3xl">
                <h1>Unfortunately, this page has not been made yet.</h1>
            </div>
        </>
    )
}