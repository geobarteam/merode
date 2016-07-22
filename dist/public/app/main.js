"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    http_1.HTTP_PROVIDERS,
    forms_1.disableDeprecatedForms(),
    forms_1.provideForms()])
    .catch(function (err) { return console.error(err); });

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx5Q0FBNkIsbUNBQW1DLENBQUMsQ0FBQTtBQUNqRSxzQkFBcUQsZ0JBQWdCLENBQUMsQ0FBQTtBQUN0RSxxQkFBK0IsZUFBZSxDQUFDLENBQUE7QUFDL0MsOEJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFFL0Msb0NBQVMsQ0FBQyw0QkFBWSxFQUFFO0lBQ3BCLHFCQUFjO0lBQ2QsOEJBQXNCLEVBQUU7SUFDeEIsb0JBQVksRUFBRSxDQUFFLENBQUM7S0FDaEIsS0FBSyxDQUFDLFVBQUMsR0FBUSxJQUFLLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDIiwiZmlsZSI6ImFwcC9tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYm9vdHN0cmFwIH0gICAgZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljJztcbmltcG9ydCB7IGRpc2FibGVEZXByZWNhdGVkRm9ybXMsIHByb3ZpZGVGb3JtcyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEhUVFBfUFJPVklERVJTIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xuXG5ib290c3RyYXAoQXBwQ29tcG9uZW50LCBbIFxuICAgIEhUVFBfUFJPVklERVJTLFxuICAgIGRpc2FibGVEZXByZWNhdGVkRm9ybXMoKSxcbiAgICBwcm92aWRlRm9ybXMoKSBdKVxuICAgIC5jYXRjaCgoZXJyOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
