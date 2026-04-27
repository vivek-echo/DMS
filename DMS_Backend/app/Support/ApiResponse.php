<?php

namespace App\Support;

use App\Constants\HttpStatusCode;
use Illuminate\Http\JsonResponse;

final class ApiResponse
{
    public static function make(
        bool $success,
        string $message,
        mixed $data = null,
        mixed $errors = null,
        int $status = HttpStatusCode::OK
    ): JsonResponse {
        $response = [
            'success' => $success,
            'message' => $message,
        ];

        if (!is_null($data)) {
            $response['data'] = $data;
        }

        if (!is_null($errors)) {
            $response['errors'] = $errors;
        }

        return response()->json($response, $status);
    }

    private function __construct()
    {
    }
}
