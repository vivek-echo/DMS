<?php

namespace App\Http\Controllers\Api;

use App\Constants\HttpStatusCode;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{

    public function login(Request $request)
    {
        try {

            // Validate request
            $validated = $this->validateRequest($request, [
                'email' => ['required', 'email'],
                'password' => ['required', 'string', 'min:6'],
            ]);

            if ($validated instanceof \Illuminate\Http\JsonResponse) {
                return $validated;
            }

            // ✅ TEMP LOGIN CHECK (hardcoded)
            if (
                $validated['email'] !== 'vivek.jha@csm.tech' ||
                $validated['password'] !== '123456'
            ) {
                return $this->errorResponse(
                    'Invalid email or password.',
                    null,
                    HttpStatusCode::UNAUTHORIZED
                );
            }

            // ✅ FAKE USER (no DB)
            $user = [
                'id' => 1,
                'name' => 'Vivek Jha',
                'email' => 'vivek.jha@csm.tech'
            ];

            // ✅ DUMMY TOKEN
            $token = base64_encode('temp-token-' . time());

            // ✅ RESPONSE
            return $this->successResponse('Login successful.', [
                'token' => $token,
                'user' => $user,
            ]);
        } catch (\Exception $e) {

            // Log::error('Temp Login Error: ' . $e->getMessage());

            return $this->errorResponse(
                'Something went wrong. Please try again later.',
                null,
                HttpStatusCode::INTERNAL_SERVER_ERROR
            );
        }
    }
}
