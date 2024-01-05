import { generateMetadata } from 'forgescript'
import { join } from 'path'

generateMetadata(join(process.cwd(), './dist/natives'), 'functions')