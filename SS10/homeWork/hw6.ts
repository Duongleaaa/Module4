class Song {
    public readonly id: number;
    private name: string;
    private length: number;
  
    constructor(id: number, name: string, length: number) {
      this.id = id;
      this.name = name;
      this.length = length;
    }
  
    getName(): string {
      return this.name;
    }
  
    setName(name: string): void {
      this.name = name;
    }
  
    getLen(): number {
      return this.length;
    }
  
    setLen(length: number): void {
      this.length = length;
    }
  }
  
  let song = new Song(1, "Waiting for you", 18000);
  
  console.log(song.getName());
  song.setName("Chúng ta của hiện tại");
  console.log(song.getLen());
  song.setLen(2000000);