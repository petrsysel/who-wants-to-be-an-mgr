type QuestionRaw = {
    question: string,
    answers: string[]
}

export type Question = {
    question: string,
    answers: Answer[]
}

export type Answer = {
    text: string,
    correct: boolean
}

export async function loadQuestions(file: string): Promise<Question[]> {
    return new Promise(async (resolve, reject) => {
        const ajaxResponse = await fetch(file)
        const result: QuestionRaw[] = await ajaxResponse.json()

        const qs: Question[] = result.map(qr => {
            return {
                question: qr.question,
                answers: qr.answers.map(a => {
                    return {
                        text: a.replace('_', ''),
                        correct: a.includes('_')
                    }
                })
            }
        })

        resolve(qs.sort(() => Math.random() - 0.5))
    })
}