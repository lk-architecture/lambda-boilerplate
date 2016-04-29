import chai, {expect} from "chai";
import {spy} from "sinon";
import sinonChai from "sinon-chai";

chai.use(sinonChai);

import {handler} from "index";

describe("`lambda boilerplate`", () => {

    var context;
    beforeEach(() => {
        context = {
            succeed: spy()
        };
    });
    
    it("invoke context [CASE SUCCEDED]", async () => {
        await handler({complete: true}, context);
        expect(context.succeed).to.have.been.calledOnce;
    });

    it("invoke context [CASE FAILED]", async () => {
        await handler({complete: false}, context);
        expect(context.succeed).to.have.been.callCount(0);
    });
});
