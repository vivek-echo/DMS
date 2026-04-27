<?php

namespace App\Http\Controllers;

use App\Constants\HttpStatusCode;
use App\Support\ApiResponse;
use Illuminate\Contracts\Validation\Validator as ValidatorContract;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Validator;

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

    protected function apiResponse(
        bool $success,
        string $message,
        mixed $data = null,
        mixed $errors = null,
        int $status = HttpStatusCode::OK
    ): JsonResponse {
        return ApiResponse::make($success, $message, $data, $errors, $status);
    }

    protected function successResponse(
        string $message,
        mixed $data = null,
        int $status = HttpStatusCode::OK
    ): JsonResponse {
        return $this->apiResponse(true, $message, $data, null, $status);
    }

    protected function errorResponse(
        string $message,
        mixed $errors = null,
        int $status = HttpStatusCode::BAD_REQUEST
    ): JsonResponse {
        return $this->apiResponse(false, $message, null, $errors, $status);
    }

    protected function validateRequest(Request $request, array $rules, array $messages = []): array|JsonResponse
    {
        $validator = Validator::make($request->all(), $rules, $messages);

        if ($validator->fails()) {
            return $this->validationErrorResponse($validator);
        }

        return $validator->validated();
    }

    protected function validationErrorResponse(ValidatorContract $validator): JsonResponse
    {
        return $this->errorResponse(
            'Validation failed.',
            $validator->errors(),
            HttpStatusCode::UNPROCESSABLE_ENTITY
        );
    }
}
