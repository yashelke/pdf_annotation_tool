export default function Footer() {
  return (
    <footer className="mt-8 px-3 text-center text-sm text-white bg-black">
      <p className="font-semibold ">PDF Annotation Tool</p>
      <p>
        <a href="#" className="underline hover:text-blue-600">
          GitHub (Coming Soon)
        </a>
      </p>
      <p className="mt-2">
        &copy; {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
}
