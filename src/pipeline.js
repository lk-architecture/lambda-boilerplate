export default function pipeline (event, context) {

    /*
     *  DO YOUR STUFF HERE
     */
    if (event.complete) {
        context.succeed();
    }
}
