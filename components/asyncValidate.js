const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const asyncValidate = (values/*, dispatch */) => {
    console.log(values);
    return sleep(1000) // simulate server latency
        .then(() => {
            if ([ 'john', 'paul', 'george', 'ringo' ].includes(values.firstName)) {
                throw { firstName: 'That firstName is taken' }
            }
        })
}

export default asyncValidate;