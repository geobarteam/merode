"use strict";
describe('User', function () {
    it('has password', function () {
        var user = { email: 'gvd8@hotmail.com', password: 'SuperCat' };
        expect(user.password).toEqual('SuperCat');
    });
    it('has email', function () {
        var user = { email: 'gvd8@hotmail.com', password: 'SuperCat' };
        expect(user.email).toEqual('gvd8@hotmail.com');
    });
});
//# sourceMappingURL=user.spec.js.map