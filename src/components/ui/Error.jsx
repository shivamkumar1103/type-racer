import { AlertTriangle, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

function Error({
  title = "Something went wrong",
  message = "An unexpected error occurred. Please try again.",
  onRetry,
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-full">
            <AlertTriangle className="w-8 h-8 text-red-600 dark:text-red-400" />
          </div>
        </div>

        <h1 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
          {title}
        </h1>

        <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-6">
          {message}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          {onRetry && (
            <Button onClick={onRetry} className="flex items-center gap-2">
              <RefreshCcw className="w-4 h-4" />
              Retry
            </Button>
          )}

          <Button
            variant="outline"
            onClick={() => window.location.reload()}
            className="dark:border-gray-600 dark:text-gray-200"
          >
            Reload Page
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Error;
