export interface IndexedElement<T> {
    index: number;
    value: T;
}

export class CircularQueue<T> {
    private queue: IndexedElement<T>[]; // Array to store queue elements with index
    private front: number; // Index of the front element
    private rear: number; // Index of the rear element
    private maxSize: number; // Maximum size of the queue

    constructor(initialElements: T[] = []) {
        this.queue = initialElements.map((value, index) => ({ index, value })); // Initialize with the provided array of objects
        this.maxSize = initialElements.length;
        this.front = this.maxSize > 0 ? 0 : -1; // If array is not empty, front is 0
        this.rear = this.maxSize > 0 ? this.maxSize - 1 : -1; // Rear is the last index if array is not empty
    }

    isEmpty(): boolean {
        return this.front === -1;
    }

    isFull(): boolean {
        return (this.rear + 1) % this.maxSize === this.front;
    }

    enqueue(value: T): boolean {
        if (this.isFull()) {
            console.log("Queue is full. Cannot enqueue.");
            return false;
        }

        const newIndex = this.rear === -1 ? 0 : this.queue[this.rear].index + 1;

        if (this.isEmpty()) {
            this.front = 0;
            this.rear = 0;
            this.queue[this.rear] = { index: newIndex, value };
        } else {
            this.rear = (this.rear + 1) % this.maxSize;
            this.queue[this.rear] = { index: newIndex, value };
        }

        return true;
    }

    dequeue(): IndexedElement<T> | null {
        if (this.isEmpty()) {
            console.log("Queue is empty. Cannot dequeue.");
            return null;
        }

        const value = this.queue[this.front];
        if (this.front === this.rear) {
            // Queue becomes empty after this dequeue operation
            this.front = -1;
            this.rear = -1;
        } else {
            this.front = (this.front + 1) % this.maxSize;
        }

        return value;
    }

    peek(): IndexedElement<T> | null {
        if (this.isEmpty()) {
            console.log("Queue is empty. Nothing to peek.");
            return null;
        }
        return this.queue[this.front];
    }

    // Method to get the queue size
    size(): number {
        if (this.isEmpty()) {
            return 0;
        } else if (this.rear >= this.front) {
            return this.rear - this.front + 1;
        } else {
            return this.maxSize - this.front + this.rear + 1;
        }
    }

    // Method to access an element at a specific index
    getElementAt(index: number): IndexedElement<T> | undefined {
        if (this.isEmpty()) {
            return undefined;
        }
    
        // If index is negative, wrap it positively to access elements from the end
        if (index < 0) {
            index = this.size() + index;
        }
    
        // Check if the resulting index is still valid
        if (index < 0 || index >= this.size()) {
            return undefined;
        }
    
        const adjustedIndex = (this.front + index) % this.maxSize;
        return this.queue[adjustedIndex];
    }
}