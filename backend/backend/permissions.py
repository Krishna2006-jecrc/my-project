from rest_framework.permissions import SAFE_METHODS, BasePermission


class IsAdminOrReadOnly(BasePermission):
    """Keep public catalogue data readable, but not editable by visitors."""

    def has_permission(self, request, view):
        return request.method in SAFE_METHODS or bool(request.user and request.user.is_staff)


class IsAdminOrCreateOnly(BasePermission):
    """Visitors may submit a form; staff alone can see submissions."""

    def has_permission(self, request, view):
        return request.method == "POST" or bool(request.user and request.user.is_staff)
