 export default function Home() {
     return (
         <div className="grid grid-rows-4 grid-cols-3 gap-1 h-screen p-6">
           <div className="col-span-3 setup bg-blue-400">Header</div>
           <div className="row-span-2 setup bg-pink-400" >Sidebar</div>
           <div className="col-span-2 setup bg-purple-400">Content-01</div>
           <div className="col-span-1 setup bg-gray-400">Content-02</div>
          <div className="col-span-1 setup bg-green-400">Content-03</div>
          <div className="col-span-3 setup bg-blue-400">Footer</div>
        </div>
    );
 }
