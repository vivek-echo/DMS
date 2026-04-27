<?php

namespace App\Http\Middleware;

use App\Constants\HttpStatusCode;
use App\Support\ApiResponse;
use Closure;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\HttpExceptionInterface;
use Throwable;

class ApiExceptionInterceptor
{
    public function handle(Request $request, Closure $next): Response
    {
        try {
            return $next($request);
        } catch (ValidationException $exception) {
            return ApiResponse::make(
                false,
                'Validation failed.',
                null,
                $exception->errors(),
                HttpStatusCode::UNPROCESSABLE_ENTITY
            );
        } catch (AuthenticationException $exception) {
            return ApiResponse::make(
                false,
                'Unauthenticated.',
                null,
                null,
                HttpStatusCode::UNAUTHORIZED
            );
        } catch (AuthorizationException $exception) {
            return ApiResponse::make(
                false,
                $exception->getMessage() ?: 'You are not authorized to perform this action.',
                null,
                null,
                HttpStatusCode::FORBIDDEN
            );
        } catch (ModelNotFoundException $exception) {
            return ApiResponse::make(
                false,
                'Resource not found.',
                null,
                null,
                HttpStatusCode::NOT_FOUND
            );
        } catch (HttpExceptionInterface $exception) {
            return ApiResponse::make(
                false,
                $exception->getMessage() ?: 'Request failed.',
                null,
                null,
                $exception->getStatusCode()
            );
        } catch (Throwable $exception) {
            report($exception);

            return ApiResponse::make(
                false,
                'Something went wrong.',
                null,
                config('app.debug') ? ['exception' => $exception->getMessage()] : null,
                HttpStatusCode::INTERNAL_SERVER_ERROR
            );
        }
    }
}
